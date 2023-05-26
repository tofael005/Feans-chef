import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefData = ({ chefs }) => {

    const { name, experience, number_of_recipes, likes, image, _id } = chefs
    return (
        <div className="w-full md:h-[400px] mx-auto mt-5 grid md:grid-cols-2 border rounded-md border-orange-300 p-6 shadow-lg">
            <div className="md:h-[350px] md:w-full">
                <LazyLoad className="md:w-72 h-full">
                    <img className="md:w-72 h-full  object-cover rounded-md" src={image} alt=" " />
                </LazyLoad>
            </div>
            <div className="mt-8 p-4 flex flex-col relative">
                <h1 className="text-4xl text-black font-bold mb-10">{name}</h1>
                <p className="text-xl mb-3 text-gray-500">Number of best recipes: <span className="text-black font-semibold">{number_of_recipes}</span></p>
                <p className="text-xl mb-3 text-gray-500">Expereance of: <span className="text-black font-semibold">{experience}</span></p>
                <p className="text-xl mb-10 text-gray-500">Like a follower: <span className="text-black font-semibold">{likes}</span></p>
                <Link to={`/viewdetails/${_id}`}><button className="bg-[#d77002] w-full p-3 absolute bottom-0 rounded-md block mt-auto text-lg font-semibold text-white">View Recipes</button></Link>
            </div>
        </div>
    );
};

export default ChefData;