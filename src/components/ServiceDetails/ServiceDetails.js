import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import AddReview from './AddReview';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, name, description, img, price } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [_id])

    // console.log(reviews);

    const reviewAddingHandler = (userReview) => {
        const newReviews = [...reviews, userReview];
        setReviews(newReviews);
    }

    return (
        <div>
            <Helmet>
                <title>Service Details - Enhance</title>
            </Helmet>
            {/* service details section */}
            <section>

                <div className='mx-10'>
                    <div className="max-w-7xl mx-auto min-h-full p-6  rounded-md bg-card">
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
                    {
                        reviews.length > 0 ?
                            <div className='grid lg:grid-cols-2 my-10 gap-10'>
                                {reviews.map((rvw, idx) => <ReviewDetails key={idx} rvw={rvw}></ReviewDetails>)}
                            </div>
                            :
                            <p className='text-center text-xl my-2 font-semibold'>No Reviews Yet...</p>
                    }

                    {
                        user?.uid ? <AddReview id={_id} name={name} reviewAddingHandler={reviewAddingHandler}></AddReview>
                            :
                            <Link to={'/login'}><p className='text-center text-xl font-semibold bg-slate-700 text-white p-2 lg:w-1/3 mx-auto rounded-lg'>Please Login to add a review!!!</p></Link>
                    }
                </div>



            </section>
        </div>
    );
};

export default ServiceDetails;