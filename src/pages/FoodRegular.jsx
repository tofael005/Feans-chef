import React from 'react';
import img1 from '/assets/images/f9.png'
import img2 from '/assets/images/f8.png'
import img3 from '/assets/images/f7.png'
import img4 from '/assets/images/f6.png'
import img5 from '/assets/images/f5.png'
import img6 from '/assets/images/f4.png'


const FoodRegular = () => {
    return (
        <main>
            <div className="text-center">
                <h1 className="text-center text-4xl font-serif font-bold">Our hot food items</h1>
                <p className="my-4 mb-8 text-gray-500">Our all Products quality 100% pure and authentic.</p>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
                    <img className="w-72 h-72" src={img1} alt="" />
                    <h1 className="text-2xl font-sans font-semibold ">Chicken Pasta</h1>
                    <p className="my-4">Price: <span className="font-semibold">$ 17.5</span></p>
                </div>
                <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
                    <img className="w-72 h-72" src={img2} alt="" />
                    <h1 className="text-2xl font-sans font-semibold ">Chicken Burger</h1>
                    <p className="my-4">Price: <span className="font-semibold">$ 19.5</span></p>
                </div>
                <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
                    <img className="w-72 h-72" src={img3} alt="" />
                    <h1 className="text-2xl font-sans font-semibold ">Beef Burger</h1>
                    <p className="my-4">Price: <span className="font-semibold">$ 21.5</span></p>
                </div>
                <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
                    <img className="w-72 h-72" src={img4} alt="" />
                    <h1 className="text-2xl font-sans font-semibold ">Beef Masala Pizza</h1>
                    <p className="my-4">Price: <span className="font-semibold">$ 20.5</span></p>
                </div>
                <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
                    <img className="w-72 h-72" src={img5} alt="" />
                    <h1 className="text-2xl font-sans font-semibold ">Franch Fry</h1>
                    <p className="my-4">Price: <span className="font-semibold">$ 13.5</span></p>
                </div>
                <div className="border block mx-auto text-center p-6 rounded-md shadow-md">
                    <img className="w-72 h-72" src={img6} alt="" />
                    <h1 className="text-2xl font-sans font-semibold ">Italian Pasta</h1>
                    <p className="my-4">Price: <span className="font-semibold">$ 18</span></p>
                </div>
            </div>
        </main>
    );
};

export default FoodRegular;