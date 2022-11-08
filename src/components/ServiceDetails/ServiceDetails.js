import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';

const ServiceDetails = () => {
    const service = useLoaderData();

    const { _id, name, description, img, price, review } = service;
    console.log(review);
    return (
        <div>
            {/* service details section */}
            <section>

                <div className='mx-10'>
                    <div className="w-full min-h-full p-6  rounded-md bg-card">
                        <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>Service Details</h2>
                        <h2 className="lg:text-xl text-center pb-2 uppercase font-bold tracking-wide">{name}</h2>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-md bg-gray-500" />
                        <div className="mt-6 mb-2">
                        </div>
                        <p className="text-gray-900">{description}</p>
                        <p className='font-semibold text-xl text-center pt-2'>Price: {price} TK</p>
                    </div>
                </div>


            </section>


            {/* review section */}

            <section className='bg-card mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-10 my-10 rounded-lg'>
                <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>Reviews</h2>

                <div>
                    <div className='grid lg:grid-cols-2 my-10 gap-10'>
                        {
                            review.map(rvw => <ReviewDetails key={rvw._id} rvw={rvw}></ReviewDetails>)
                        }
                    </div>

                    <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                        <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>

                                <div className="flex flex-col w-full">
                                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
                                    <button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400">Leave feedback</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </div>
    );
};

export default ServiceDetails;