import React from 'react';
import img1 from '/assets/img/hut.jpg'
import img2 from '/assets/img/donos.jpg'
import img3 from '/assets/img/kfc.jpg'
import img4 from '/assets/img/king.jpg'

const TrustedClient = () => {
    return (
        <section className=" mt-[140px]">
            <h2 className="text-3xl font-bold text-center mb-10 underline text-[#d77002]">Trusted <span className="text-black">By</span></h2>
            <div className="md:w-[1240px] mx-auto rounded-md grid md:grid-cols-4 items-center gap-5  my-20 border p-8">
                <div className="border p-4 shadow-md">
                <img className="w-[200px] mt-6 md:mt-auto mx-auto rounded-md" src={img1} alt="" />
                </div>
                <div className="border p-4 shadow-md">
                <img className="w-[200px] mt-6 md:mt-auto mx-auto rounded-md" src={img2} alt="" />
                </div>
                <div className="border p-4 shadow-md">
                <img className="w-[200px] mt-6 md:mt-auto mx-auto rounded-md" src={img3} alt="" />
                </div>
                <div className="border p-4 shadow-md">
                <img className="w-[200px] mt-6 md:mt-auto mx-auto rounded-md" src={img4} alt="" />
                </div>
            </div> 
        </section>
    );
};

export default TrustedClient;