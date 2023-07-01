import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;