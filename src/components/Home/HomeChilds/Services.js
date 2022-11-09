import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useEffect } from 'react';

const Services = ({ service, setLoading }) => {
    const { _id, name, description, img, price } = service;

    useEffect(()=>{
        setLoading(false);
    },[])
    return (
        <div className='mx-auto drop-shadow-xl'>
            
            <div className="max-w-sm min-h-full p-6 rounded-md shadow-md bg-card">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="mt-6 mb-2">
                    <h2 className="lg:text-xl font-bold text-white">{name}</h2>
                </div>
                <p className="text-gray-200">{description.slice(0, 100) + '...'}</p>
                <p className='font-semibold text-slate-300 text-center'>Price: {price} TK</p>
                <Link to={`/services/${_id}`}><button className='w-full mt-2 btn-bg text-white p-1 rounded-lg text-md'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Services;