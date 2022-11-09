import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviewsRow from './MyReviewsRow';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyReviews.css';

const MyReviews = () => {
    const reviews = useLoaderData();
    const [loadedReviews, setLoadedReviews] = useState(reviews);
    // console.log(loadedReviews);

    const deleteHandlerForUI = (id) => {
        const remaining = loadedReviews.filter(rvw => rvw._id !== id);
        setLoadedReviews(remaining);

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
                loadedReviews.length === 0 ?
                <p className='text-5xl mx-auto custom-align'>No reviews were added...</p>
                :
                <div className="overflow-x-auto relative rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            loadedReviews.map(review => <MyReviewsRow key={review._id} review={review} deleteHandlerForUI={deleteHandlerForUI}></MyReviewsRow>)
                        }
                    </tbody>
                </table>
            </div>
            }

        </div>
    );
};

export default MyReviews;