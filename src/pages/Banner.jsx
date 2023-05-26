import React from 'react';
import banner from '/assets/images/new_reservation-banner-2.jpg'
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className="w-full h-[90vh] relative mb-10">
            <div className="before:content-[''] w-full h-[90vh] relative before:absolute before:bg-[#00000077] before:top-0 before:right-0 before:left-0 before:bottom-0">

                <img className="w-full h-full object-cover" src={banner} alt="" />
            </div>

            <div className="absolute max-w-[1240px] w-full mx-auto top-[30%] -mt-6 left-5 right-0 justify-center flex-col text-white h-full ">
                <h2 className="sm:text-6xl text-3xl pl-2 font-bold mt-10 leading-normal px-4 text-[#d77002]">Are You Hungry? <br /> <span className="text-white">Please Take Your Food... <br /> eat now! </span></h2>
                <button className="px-6 py-3 bg-[#d77002] rounded mt-6 ml-2 flex items-center gap-2">Explor Now <BsBoxArrowUpRight/></button>
            </div>
            
        </div>

    );
};

export default Banner;