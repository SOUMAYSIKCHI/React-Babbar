import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaGem } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Card(props) {
    let review = props.review;
    // let setReview = props.setReview;

    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[30] mx-auto">
                <img className="aspect-square rounded-full w-[80px] h-[80px] z-100"
                    src={review.image} alt="" />
                <div className="bg-violet-500 w-[80px] h-[80px] left-[10px] rounded-full absolute top-[-6px] z-[-7]" >

                </div>
            </div>

            <div className="text-denter">
                <p className="font-bold text-2xl mt-7">{review.name}</p>
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>
            <div>
                <button className="text-violet-400 mx-auto mt-5"> <FaQuoteLeft /></button>
                <p className="mt-4 text-slate-500">{review.text}</p>
                <button className="text-violet-400 mx-auto mt-5"> <FaQuoteRight /></button>
            </div>
        
        </div>
    )
}

export default Card