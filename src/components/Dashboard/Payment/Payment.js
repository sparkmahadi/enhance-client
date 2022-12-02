import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { serviceName, price, buyerLocation } = booking;
    // if(navigation.state === "loading"){
    //     return <div className='custom-align'><Spinner></Spinner></div>
    // }
    return (
        <div className='flex justify-center bg-white rounded-lg p-3'>
            <div>
                <h3 className="text-3xl">Payment for {serviceName}</h3>
                <p className="text-xl">Please pay <strong>${price}</strong> for your order on 'date' at {buyerLocation}</p>
                <div className='w-96 my-12'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;