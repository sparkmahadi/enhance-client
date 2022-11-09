import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Home/HomeChilds/Services';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react';

const AllServices = () => {
    const [loading, setLoading] = useState(true);
    // const services = useLoaderData();
    const [services, setServices] = useState([]);
    useEffect(()=>{
        setLoading(true);
        
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));

        // setLoading(false);
    },[])
    return (
        <div className='sm:p-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-slate-500 my-5 rounded-lg min-h-screen'>
            <Helmet>
                <title>Services - Enhance</title>
            </Helmet>

            

            <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>My Services</h2>
            <div className='custom-align z-10'>
            {
                loading ? <Spinner></Spinner>
                :
                undefined
            }
            </div>

            <div className='grid lg:grid-cols-3 gap-10 py-10'>
            
                {
                    services.map(service => <Services key={service._id} service={service} setLoading={setLoading}></Services>)
                }

            </div>
        </div>

    );
};

export default AllServices;