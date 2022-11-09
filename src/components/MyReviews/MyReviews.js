import React, { useContext } from 'react';
import MyReviewsRow from './MyReviewsRow';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyReviews.css';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/MyReviews?email=${user.email}`, {
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
            .then(data => setReviews(data))
    }, [user.email])

    console.log(reviews);



    // const [loadedReviews, setLoadedReviews] = useState(reviews);
    // console.log(loadedReviews);

    const deleteHandlerForUI = (id) => {
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
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mx-auto my-5 min-h-screen'>
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
                reviews.length === 0 ?
                    <p className='text-5xl mx-auto custom-align'>No reviews were added...</p>
                    :
                    <div className="overflow-x-auto relative rounded-lg">
                        <table className="w-full text-sm text-left text-gray-400">
                            <thead className="text-xs uppercase second-bg text-white">
                                <tr>
                                    <th scope="col" className="py-3 px-6 text-center border border-sky-200">
                                        Service
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-center border border-sky-200">
                                        My Feedback
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-center border border-sky-200">
                                        My Comments
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-center border border-sky-200">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <MyReviewsRow key={review._id} review={review} deleteHandlerForUI={deleteHandlerForUI}></MyReviewsRow>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default MyReviews;