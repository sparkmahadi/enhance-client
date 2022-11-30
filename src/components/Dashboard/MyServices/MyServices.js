import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../Spinner/Spinner';
import MyServicesRow from './MyServicesRow';
import { Link } from 'react-router-dom';

const MyServices = () => {
    const {data: services, isLoading, refetch} = useQuery({
        queryKey: ['services'],
        queryFn: async()=> {
            const res = await fetch('http://localhost:5000/services')
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteService = (serviceId) =>{
        console.log(serviceId);
    }
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 md:px-10 lg:px-8 mx-auto my-5 min-h-screen'>
        <Helmet>
            <title>Dashboard - Enhance</title>
        </Helmet>

        {
            isLoading ? <div className='custom-align'><Spinner></Spinner></div>
                :
                services.length === 0 ?
                    <p className='text-5xl mx-auto custom-align'>No reviews were added...</p>
                    :
                    <div className="overflow-x-auto relative rounded-lg">
                        <table className="w-full text-sm text-left text-gray-400 hidden md:block">
                            <thead className="text-xs uppercase second-bg text-white">
                                <tr>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        SL
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Service
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Total Order
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Reviews
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((service, idx) => <MyServicesRow
                                        key={service._id}
                                        idx={idx+1}
                                        service={service}
                                    ></MyServicesRow>)
                                }
                            </tbody>
                        </table>


                        <div>
                            {
                                services.map(service =>
                                    <div key={service._id} className='py-5 px-10 second-bg text-white rounded-lg md:hidden mb-5'>
                                        <ul className='list-disc list-outside'>
                                            <li><span className='font-semibold'>Service : </span> {service.serviceName}</li>
                                            <li><span className='font-semibold'>My Feedback : </span>{service.reviewTitle}</li>
                                            <li><span className='font-semibold'>My Comments : </span> {service.description}</li>
                                            <li>Actions:
                                                <div className='px'>
                                                <button onClick={() => handleDeleteService(service._id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Delete</button>
                                                <Link to={`/review/${service._id}`}><button className='btn bg-green-800 p-1 md:p-2 rounded-lg text-white'>Edit</button></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
        }

    </div>
    );
};

export default MyServices;