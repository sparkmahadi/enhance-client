import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from './../../Spinner/Spinner';

const UpdateService = () => {
    const [updating, setUpdating] = useState(false);
    const service = useLoaderData();
    const { _id, name, img, description, price } = service;

    const handleUpdateReview = (event) => {
        event.preventDefault();
        setUpdating(true);
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        const updatedService = { name, description, img, price };

        fetch(`https://enhance-server.vercel.app/service/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('Review is updated successfully');
                    setUpdating(false);
                }
            })

    }
    return (
        <div>
            {
                updating && <div className='custom-align'><Spinner></Spinner></div>
            }
            <h2 className="text-xl md:text-3xl font-semibold text-center mb-5 text-white">Update Your Opinion!</h2>
            <div className="container mx-auto bg-white px-10 py-10 rounded-lg md:w-2/3 lg:w-1/2">
                <form onSubmit={handleUpdateReview}>
                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-lg font-medium">Service Name:</label>
                        <input type="text" name='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' defaultValue={name}/>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="img" className="block mb-2 text-lg font-medium">Photo URL:</label>
                        <input type="text" name='img' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' defaultValue={img}/>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="price" className="block mb-2 text-lg font-medium">Price:</label>
                        <input type="text" name='price' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' defaultValue={price} />
                    </div>

                    <div className=''>
                        <label htmlFor="description" className="block mb-2 text-lg font-medium">Description:</label>
                        <textarea name='description' rows="3" defaultValue={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm text-white block mt-6 mx-auto">Update feedback</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;