import React from 'react';
import Services from '../Home/HomeChilds/Services';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react';

const AllServices = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        setLoading(true);
        fetch('https://enhance-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
        setLoading(false);
    },[])
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl p-5 md:p-10 lg:p-8 mx-5 md:mx-10 lg:mx-auto rounded-lg second-bg min-h-screen'>
            <Helmet>
                <title>Services - Enhance</title>
            </Helmet>

            

            <h2 className='text-white text-xl lg:text-2xl font-semibold mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 uppercase text-center rounded-lg'>Services</h2>
            <div className='custom-align z-10'>
            {
                loading ? <div className='custom-align'><Spinner></Spinner></div>
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