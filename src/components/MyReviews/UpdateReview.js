import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const { _id, serviceName, reviewTitle, description } = review;

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewTitle = form.reviewTitle.value;
        const description = form.description.value;
        const update = {reviewTitle, description};

            fetch(`http://localhost:5000/review/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('review updated')
                        console.log(data)
                    }
                })

    }
    return (
        <div>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center mb-5">Update Your Opinion!</h2>

                        <div className="flex flex-col w-full">
                            <form onSubmit={handleUpdateReview}>
                                <label htmlFor="name" className="block text-center mb-2 text-lg font-medium">Service Name:</label>
                                <input type="text" name='name' className='mb-5 rounded-lg w-1/2 mx-auto block p-2 text-gray-100 bg-gray-800' defaultValue={serviceName} readOnly />

                                <label htmlFor="reviewTitle" className="block text-center mb-2 text-lg font-medium">My Feedback:</label>
                                <input type="text" name='reviewTitle' className='mb-5 rounded-lg w-1/2 mx-auto block p-2 text-gray-100 bg-gray-800' defaultValue={reviewTitle} />

                                <label htmlFor="description" className="block text-center mb-2 text-lg font-medium">My Comments:</label>
                                <textarea name='description' rows="3" defaultValue={description} className="p-4 resize-none text-gray-100 bg-gray-800 className='mb-5 rounded-lg w-1/2 mx-auto block p-2'"></textarea>
                                <button type="submit" className="p-4 my-8 font-semibold rounded-md text-white bg-violet-800 block mx-auto">Update feedback</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;