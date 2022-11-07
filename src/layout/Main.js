import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import Nav from '../components/Common/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;