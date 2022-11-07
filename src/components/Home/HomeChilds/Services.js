import React from 'react';
import './Services.css'

const Services = ({service}) => {
    const {name, description, img}= service;
    return (
        <div className='mx-auto'>
            <div className="max-w-sm min-h-full p-6 rounded-md shadow-md bg-card">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="lg:text-xl font-bold tracking-wide">{name}</h2>
                </div>
                <p className="dark:text-gray-100">{description.slice(0,100) + '...'}</p>
            </div>
        </div>
    );
};

export default Services;