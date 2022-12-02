import React, { useContext } from 'react';
import MyReviewsRow from './MyReviewsRow';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyReviews.css';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import Spinner from '../../Spinner/Spinner';

const MyReviews = () => {
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('enhance-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);
                setReviewsLoading(false);
            })
    }, [user.email])

    const deleteHandlerForUI = (id,serviceName) => {
        const agree = window.confirm(`Are you sure to delete the review on ${serviceName}?`)
        if(agree){
            const remaining = reviews.filter(rvw => rvw._id !== id);
            setReviews(remaining);
    
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review is deleted successfully!!!");
                    }
                    console.log(data);
                })
        }
    }
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>My Reviews - Enhance</title>
            </Helmet>

            {
                reviewsLoading ? <div className='custom-align'><Spinner></Spinner></div>
                    :

                    reviews.length === 0 ?
                        <p className='text-5xl mx-auto custom-align'>No reviews were added...</p>
                        :
                        <div className="overflow-x-auto relative rounded-lg">
                            <div className="overflow-x-auto hidden md:block">
                                <table className="table w-full">
                                    <thead className="text-xs uppercase">
                                        <tr>
                                            <th className="">
                                                Service Name
                                            </th>
                                            <th className="">
                                                My Feedback
                                            </th>
                                            <th className="">
                                                My Coments
                                            </th>
                                            <th className="">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews.map(review => <MyReviewsRow
                                                key={review._id}
                                                review={review}
                                            ></MyReviewsRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>


                            <div>
                                {
                                    reviews.map(review =>
                                        <div key={review._id} className='py-5 px-10 second-bg text-white rounded-lg md:hidden mb-5'>
                                            <ul className='list-disc list-outside'>
                                                <li><span className=''>Service : </span> {review.serviceName}</li>
                                                <li><span className=''>My Feedback : </span>{review.reviewTitle}</li>
                                                <li><span className=''>My Comments : </span> {review.description}</li>
                                                <li>Actions:
                                                    <div className=''>
                                                    <button onClick={() => deleteHandlerForUI(review._id, review.serviceName)} className='btn btn-error btn-sm text-white mr-2'>Delete</button>
                                                    <Link to={`/dashboard/review/${review._id}`}><button className='btn btn-success btn-sm text-white'>Edit</button></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
            }

        </div>
    );
};

export default MyReviews;