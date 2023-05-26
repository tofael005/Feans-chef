import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../pages/Footer';

const Root = () => {
    return (
        <div className="overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;