import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Home/HomeChilds/Services';
import { Helmet } from 'react-helmet-async';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='sm:p-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-slate-500 my-5 rounded-lg'>
            <Helmet>
                <title>Services - Enhance</title>
            </Helmet>
            <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>My Services</h2>
            <div className='grid lg:grid-cols-3 gap-10 py-10'>
                {
                    services.map(service => <Services key={service._id} service={service}></Services>)
                }

            </div>
        </div>

    );
};

export default AllServices;