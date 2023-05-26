import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChefBanner from './SingleChefBanner';
import SingleReciepeCard from './SingleReciepeCard';


const ViewDetails = () => {

    const data = useLoaderData()
    return (
        <main>

            <SingleChefBanner chef={data} />
            <h1 className="text-center text-3xl font-bold mt-48 underline font-serif">All Recipe Items</h1>
            <div className="grid md:grid-cols-3 gap-8 max-w-[1340px] mx-auto mb-20 h-full">
                
                {
                    data?.recipes && data.recipes
                        .map(((singleCard, i) => <SingleReciepeCard singleCard={singleCard} key={i} />))
                }
            </div>
        </main >
    );
};

export default ViewDetails;