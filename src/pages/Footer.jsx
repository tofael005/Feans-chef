import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-black">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 text-white px-6 md:px-0 py-10">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold my-8">Contact Us</h1>
                    <p>Location: Dhanmondi 32</p>
                    <p className="my-3">Cell: +880 1966 406 795</p>
                    <p className="cursor-pointer">Email: feans@food.com</p>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold my-8">Feans</h1>
                    <Link to="/">
                        <p className="my-3 cursor-pointer">Home</p>
                    </Link>
                    <Link to="/blog">
                        <p className="my-3 cursor-pointer">Blogs</p>
                    </Link>
                    <Link to="/login">
                        <p className="my-3 cursor-pointer">Join Now</p>
                    </Link>
                    
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold my-8">Opening Hours</h1>
                    <p className="text-center my-3">Everyday</p>
                    <p>10.00 Am -10.00 Pm</p>
                    <div className="flex gap-3 text-2xl mt-4 justify-center cursor-pointer">
                        <FaFacebookF />
                        <FaTwitter />
                        <AiFillLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                
            </div>
            <hr className=" max-w-[1240px] mx-auto" />
            <div className="block">
                <p className="text-center text-gray-500 py-6">Copyright &copy;2023 All rights reserved by <span className="text-orange-500">IT tune.</span></p>
            </div>

        </div>
    );
};

export default Footer;