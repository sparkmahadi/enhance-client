import React, { useContext } from 'react';
import MyReviewsRow from './MyReviewsRow';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyReviews.css';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://enhance-server.vercel.app/MyReviews?email=${user.email}`, {
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

    const deleteHandlerForUI = (id) => {
        const remaining = reviews.filter(rvw => rvw._id !== id);
        setReviews(remaining);

        fetch(`https://enhance-server.vercel.app/reviews/${id}`, {
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
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 md:px-10 lg:px-8 mx-auto my-5 min-h-screen'>
            <Helmet>
                <title>My Reviews - Enhance</title>
            </Helmet>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

            {
                reviewsLoading ? <div className='custom-align'><Spinner></Spinner></div>
                    :

                    reviews.length === 0 ?
                        <p className='text-5xl mx-auto custom-align'>No reviews were added...</p>
                        :
                        <div className="overflow-x-auto relative rounded-lg">
                            <table className="w-full text-sm text-left text-gray-400 hidden md:block">
                                <thead className="text-xs uppercase second-bg text-white">
                                    <tr>
                                        <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                            Service
                                        </th>
                                        <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                            My Feedback
                                        </th>
                                        <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                            My Comments
                                        </th>
                                        <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review => <MyReviewsRow
                                            key={review._id}
                                            review={review}
                                            deleteHandlerForUI={deleteHandlerForUI}
                                        ></MyReviewsRow>)
                                    }
                                </tbody>
                            </table>


                            <div>
                                {
                                    reviews.map(review =>
                                        <div key={review._id} className='py-5 px-10 second-bg text-white rounded-lg md:hidden mb-5'>
                                            <ul className='list-disc list-outside'>
                                                <li><span className='font-semibold'>Service : </span> {review.serviceName}</li>
                                                <li><span className='font-semibold'>My Feedback : </span>{review.reviewTitle}</li>
                                                <li><span className='font-semibold'>My Comments : </span> {review.description}</li>
                                                <li>Actions:
                                                    <div className='px'>
                                                    <button onClick={() => deleteHandlerForUI(review._id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Delete</button>
                                                    <Link to={`/review/${review._id}`}><button className='btn bg-green-800 p-1 md:p-2 rounded-lg text-white'>Edit</button></Link>
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