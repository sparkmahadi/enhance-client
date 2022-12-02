import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';

const BookingModal = ({ serviceBooking, setServiceBooking, refetch }) => {
    const {description, img, name, price, _id} = serviceBooking;

    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;

        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const buyerPhone = form.phone.value;
        const buyerLocation = form.location.value;

        const booking = {
            buyerName, buyerEmail, buyerPhone, buyerLocation, serviceName: name, price, serviceId: _id
        }

        fetch(`https://enhance-server.vercel.app/serviceBookings?email=${user?.email}&serviceId=${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Service is booked');               
                }
                else {
                    toast.error(data.message);
                }
            })
        setServiceBooking(null);
    }
    return (
        <div className='text-gray-900'>
            <input type="checkbox" id="service-booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="text-lg input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="text-lg input-bordered" />

                        <input name="service" type="text" defaultValue={name} disabled className="text-lg input-bordered" />

                        <input name="price" type="text" defaultValue={`${price} BDT`} disabled placeholder="Email Address" className="input-bordered text-lg" />

                        <input name="phone" type="text" placeholder="Your Mobile Number" className="text-lg input-bordered" required/>

                        <input name="location" type="text" placeholder="Your Location" className="text-lg input-bordered" required/>
                        <br />
                        {
                            user && 
                            <input className='btn btn-primary w-full' type="submit" value="Submit" />
                        }
                        {
                            !user && 
                            <p>Please <Link to='/login' className='text-primary font-bold'>Log In</Link> First to Book</p>
                        }
                    </form>

                <div className="modal-action">
                    <label onClick={() => setServiceBooking(null)} htmlFor="service-booking-modal" className="btn btn-accent w-full">Cancel</label>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;