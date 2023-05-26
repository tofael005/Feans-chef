import React from 'react';
import img from '../../public/assets/images/9410.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-center">
            <img className="w-full" src={img} alt="" />
            <p className="text-xl font-bold">Server in not found.</p>
            <Link className="text-center block" to="/"><button className="underline text-xl text-blue-700">Go to Home</button></Link>
        </div>
    );
};

export default Error;