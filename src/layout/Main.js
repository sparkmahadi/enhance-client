import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Common/Footer/Footer';
import Nav from '../components/Common/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <ToastContainer position='top-center'></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;