import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();

    const { _id, name, description, img, price } = service;
    return (
        <div>
            <section>

                <div className='mx-10'>
                    <div className="w-full min-h-full p-6  rounded-md shadow-md bg-card">
                        <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-4xl uppercase text-center rounded-lg'>Service Details</h2>
                        <h2 className="lg:text-3xl text-center pb-2 uppercase font-bold tracking-wide">{name}</h2>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-md bg-gray-500" />
                        <div className="mt-6 mb-2">
                        </div>
                        <p className="text-gray-900">{description}</p>
                        <p className='font-semibold text-xl text-center pt-2'>Price: {price} TK</p>
                    </div>
                </div>


            </section>
            <section>
                <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>Reviews</h2>
            </section>
        </div>
    );
};

export default ServiceDetails;