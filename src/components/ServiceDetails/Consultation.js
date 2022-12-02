import React from 'react';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { format } from 'date-fns';
import './Consultation.css';
import Payment from '../Dashboard/Payment/Payment';

const Consultation = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [confirmation, setConfirmation] = useState(false);

    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <div>
            <div className="hero py-10 light-nav-bg text-amber-900">
                <div className="hero-content px-0 sm:px-5 flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/6ZZsCc6/home-interior-consultation.jpg" className="w-[320px] sm:w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='rounded-lg w-[320px] sm:w-full'>
                        <h5 className='text-xl lg:text-2xl p-2 pb-0 text-center'>Please pick a date for consultation.</h5>
                        <div className='mx-auto'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                        <div className='text-md lg:text-lg text-center'>{footer}</div>
                    </div>
                </div>

            </div>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 p-5'>
                    <h5 className='text-lg lg:text-xl text-white'>Available appointments on {format(selectedDate, 'PP')}</h5>
                    <select className='p-2 rounded-lg nav-bg text-white' name="" id="">
                        <option value="09:00 AM - 11:00 PM">09:00 AM - 11:00 PM</option>
                        <option value="11:00 AM - 1:00 PM">09:00 - 12:00</option>
                        <option value="02:00 PM- 4:00 PM">09:00 - 12:00</option>
                        <option value="04:00 PM- 6:00 PM">09:00 - 12:00</option>
                    </select>
                </div>
                <div className='flex justify-center pb-5'>
                    <button onClick={()=>setConfirmation(true)} className='btn mx-auto btn-sm '>Confirm Booking</button>
                </div>
            </div>
            {
                confirmation &&
                <Payment></Payment>
            }
        </div>
    );
};

export default Consultation;