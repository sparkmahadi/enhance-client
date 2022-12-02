import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const review = useLoaderData();
    console.log(review);
    const { _id, serviceName, reviewTitle, description } = review;

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewTitle = form.reviewTitle.value;
        const description = form.description.value;
        const update = { reviewTitle, description };

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
                    toast.success('Review is updated successfully')
                    console.log(data)
                }
            })

    }
    return (
        <div>
            <h2 className="text-xl md:text-3xl font-semibold text-center mb-5 text-white">Update Your Opinion!</h2>
            <div className="container mx-auto bg-white px-10 py-10 rounded-lg md:w-2/3 lg:w-1/2">
                <form onSubmit={handleUpdateReview}>
                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-lg font-medium">Service Name:</label>
                        <input type="text" name='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' defaultValue={serviceName} readOnly />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="reviewTitle" className="block mb-2 text-lg font-medium">My Feedback:</label>
                        <input type="text" name='reviewTitle' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' defaultValue={reviewTitle} />
                    </div>

                    <div className=''>
                        <label htmlFor="description" className="block mb-2 text-lg font-medium">My Comments:</label>
                        <textarea name='description' rows="3" defaultValue={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm text-white block mt-6 mx-auto">Update feedback</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;