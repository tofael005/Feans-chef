import React from 'react';
import Banner from './Banner';
import Chef from '../component/Chef';
import FoodRegular from './FoodRegular';
import TrustedClient from './TrustedClient';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FoodRegular/>
            <Chef/> 
            <TrustedClient/>
        </div>
    );
};

export default Home;