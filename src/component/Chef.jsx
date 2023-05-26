import React, { useState } from 'react';
import { useApiData } from '../provider/ApiDataProvider';
import ChefData from './ChefData';

const Chef = () => {
    const {chefs} = useApiData()

    const [cardCount, setCardCount] = useState(4)
    const [seeMore, setSeeMore] = useState(true);

    const slider = chefs.slice(0, cardCount);


    const handelSeeMoreBtn = () => {
        setCardCount(chefs.length);
        setSeeMore(false)
    }


    return (
        <div>
            <h1 className="text-center mt-20 text-5xl font-serif font-semibold underline">Our valuable Chefs</h1>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1240px] mx-auto my-16">
            {
                slider.map((chefs=><ChefData key={chefs._id} chefs={chefs}></ChefData>))
            }
            </div>
            <button onClick={handelSeeMoreBtn} className={`bg-[#d77002] py-3 px-5 block mx-auto text-white font-semibold rounded mb-20 ${seeMore ? "" : "hidden"}`}>See More</button>
        </div>
    );
};

export default Chef;