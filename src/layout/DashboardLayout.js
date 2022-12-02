import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Common/Footer/Footer';
import Nav from '../components/Common/Nav/Nav';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import useAdmin from './../hooks/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
        <Nav></Nav>
        <ToastContainer position='top-center'></ToastContainer>
        <Helmet>
            <title>Enhance | Dashboard</title>
        </Helmet>
        <div style={{gridTemplateColumns: '1fr 5fr'}} className='custom-grid lg:grid gap-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='mx-auto'>
                <ul className="menu sm:w-56 mx-auto">
                <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/profile'>My Profile</NavLink></li>
                    {
                        <>
                        <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/myorders'>My Orders</NavLink></li>
                        <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/myReviews'>My Reviews</NavLink></li>
                        </>
                    }
                    {
                       isAdmin &&
                       <>
                       <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/addService'>Add New Service</NavLink></li>
                       <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/myServices'>All Services</NavLink></li>
                       <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/allBuyers'>All Buyers</NavLink></li>
                       <li className='lg:text-lg bg-white rounded-lg mb-2'><NavLink className='p-2' to='/dashboard/allReviews'>All Reviews</NavLink></li>
                   </>
                    }
                </ul>
            </div>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default DashboardLayout;