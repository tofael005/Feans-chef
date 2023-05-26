import React, { useState } from 'react';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SingleReciepeCard = ({ singleCard }) => {
    const [isDisable, setDisable] = useState(false)

    const hangleFavoriteBtn = () => {
        toast("Added in Favorite")
        setDisable(true)
    }
    

    const { recipe_name, cooking_method, food_image, ratings, ingredient } = singleCard;

    return (
        <main className="mt-16">
            <div className="border w-[400px] h-[830px] rounded-md  p-4 shadow-lg">
                <img className="w-full h-72 block mx-auto rounded-md" src={food_image} alt="" />
                <p className="font-semibold my-3 text-3xl"> {recipe_name}</p>
                <p className="font-semibold my-3 text-xl">Food rating: <span className="font-semibold text-[#d77002]">{ratings}</span></p>
                <div className="border p-4 rounded">
                    <span className="font-bold text-xl ">ingredient : </span>
                    <div className="md:flex gap-3 flex-wrap">
                        {
                            singleCard?.ingredient && singleCard.ingredient.map((ingredient, index) => <span key={index}>{ingredient}</span>)
                        }
                    </div>
                </div>
                <p className="font-semibold my-3 text-xl">Cooking Method: <span className="text-base text-zinc-600">{cooking_method}</span></p>
                <button onClick={hangleFavoriteBtn } disabled={isDisable} className={` px-6 py-3 flex items-center gap-2 mx-auto my-6 text-white rounded ${isDisable ? "bg-[#a15703] cursor-not-allowed": "bg-[#d77002]"}`}>{isDisable ? "Favorited" : "Favorite"} <BsFillChatSquareHeartFill/></button>
            </div>
            <ToastContainer />
        </main>
    );
};

export default SingleReciepeCard;