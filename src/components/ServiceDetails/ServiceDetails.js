import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import AddReview from './AddReview';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const [loadedReviews, setLoadedReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const service = useLoaderData();
    const { _id, name, description, img, price } = service;

    useEffect(() => {
        fetch(`https://enhance-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoadedReviews(data);
            })
    }, [_id])

    const reviewAddingHandler = (userReview) => {
        const newReviews = [userReview, ...loadedReviews];
        setLoadedReviews(newReviews);
    }

    return (
        <div>
            <Helmet>
                <title>Service Details - Enhance</title>
            </Helmet>
            {/* service details section */}
            <section>

                <div className='m-5'>
                    <div className="max-w-7xl mx-auto min-h-full p-6 rounded-md second-bg text-white">
                        <h2 className='titles-bg text-white px-4 py-1 lg:py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-xl lg:text-2xl uppercase text-center rounded-lg mb-2'>Service Details</h2>
                        <h2 className="text-xl lg:text-2xl text-center pb-2 uppercase font-bold tracking-wide">{name}</h2>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-md bg-gray-500" />
                        <div className="mt-6 mb-2">
                        </div>
                        <p className="text-md lg:text-lg px-2 mb-2">{description}</p>
                        <p className='font-semibold text-xl lg:text-2xl text-center pt-2'>Price: {price} TK</p>
                    </div>
                </div>


            </section>


            {/* review section */}

            <section className='max-w-7xl mx-auto min-h-full p-6 rounded-md second-bg text-white'>
                <h2 className='titles-bg text-white px-4 py-1 lg:py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-xl lg:text-2xl uppercase text-center rounded-lg'>Reviews</h2>

                <div className='text-white'>
                    {
                        loadedReviews.length > 0 ?
                            <div className='grid lg:grid-cols-2 my-10 gap-10'>
                                {loadedReviews.map((rvw, idx) => <ReviewDetails key={idx} rvw={rvw} ></ReviewDetails>)}
                            </div>
                            :
                            <p className='text-center text-xl lg:text-2xl my-20 font-semibold'>No Reviews Yet...</p>
                    }

                    {
                        user?.uid ? <AddReview id={_id} name={name} reviewAddingHandler={reviewAddingHandler} ></AddReview>
                            :
                            <Link to={'/login'} state={{ from: location }} replace><p className='text-center text-lg lg:text-xl font-semibold bg-slate-700 text-white p-2 md:w-1/2 lg:w-1/3 mx-auto rounded-lg'>Please Login to add a review!!!</p></Link>
                    }
                </div>



            </section>
        </div>
    );
};

export default ServiceDetails;