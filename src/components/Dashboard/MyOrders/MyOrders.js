import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../Spinner/Spinner';
import MyOrdersRow from './MyOrdersRow';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [ordersLoading, setOrdersLoading] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://enhance-server.vercel.app/serviceBookings?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('enhance-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                setOrders(data);
                setOrdersLoading(false);
            })
    }, [user.email])

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>My orders - Enhance</title>
            </Helmet>
            {
                ordersLoading ? <div className='custom-align'><Spinner></Spinner></div>
                    :

                    orders.length === 0 ?
                        <p className='text-3xl text-white mx-auto custom-align'>No orders were added...</p>
                        :
                        <div className="overflow-x-auto relative rounded-lg">
                            <div className="overflow-x-auto hidden md:block">
                                <table className="table w-full">
                                    <thead className="text-xs uppercase">
                                        <tr>
                                            <th className="">
                                                Service Name
                                            </th>
                                            <th className="">
                                                Price
                                            </th>
                                            <th className="">
                                                Location
                                            </th>
                                            <th className="">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map(order => <MyOrdersRow
                                                key={order._id}
                                                order={order}
                                            ></MyOrdersRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>


                            <div>
                                {
                                    orders.map(order =>
                                        <div key={order._id} className='py-5 px-10 second-bg text-white rounded-lg md:hidden mb-5'>
                                            <ul className='list-disc list-outside'>
                                                <li><span className='font-semibold'>Service : </span> {order.serviceName}</li>
                                                <li><span className='font-semibold'>Price : </span>{order.price}</li>
                                                <li><span className='font-semibold'>Location : </span> {order.buyerLocation}</li>
                                                <li>Actions:
                                                    <div className='px'>
                                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-sm rounded-lg text-white'>Pay</button></Link>
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

export default MyOrders;