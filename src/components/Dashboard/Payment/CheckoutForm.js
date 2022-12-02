import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ booking }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { serviceName, buyerName, buyerEmail, price, buyerLocation, _id } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });
        if (error) {
            console.log(error);
            setError(error.message);
        }
        else {
            setError('');
        }

        stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            })
            .then(function (result) {
                if (result.error) {
                    setError(result.error.message);
                    setProcessing(false);
                    return;
                }
                if (result.paymentIntent.status === 'succeeded') {
                    toast.success(`Congrats! Your Payment of ${result.paymentIntent.amount / 100} TK is completed`);
                    setTransactionId(result.paymentIntent.id);

                    const paymentInfo = {
                        payment: 'Paid',
                        paymentTime: format(new Date(), 'Pp')
                    };
                    fetch(`http://localhost:5000/serviceBookings/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(paymentInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount > 0) {
                                console.log('updated as paid in orders');
                            }
                    })
                }
                setProcessing(false);
            });
        }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-success'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{error}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;