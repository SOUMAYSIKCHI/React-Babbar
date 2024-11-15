import React, { useState } from "react"
import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
    let reviews = props.reviews;
    // console.log(reviews[]);
    const [idx, setIdx] = useState(0);
    const [review, setReview] = useState(reviews[idx]);
 
    function leftClickHandler(){
        console.log("left",idx);
        if(idx-1<0){
            setIdx(reviews.length-1);
            setReview(reviews[idx]);
        }else{
            setIdx(idx-1);
            setReview(reviews[idx]);
        }
        console.log(" after left",idx);

    }
    function rightClickHandler(){
        console.log("right",idx);
        if(idx+1>=reviews.length){
            setIdx(0)
            setReview(reviews[idx]);
        }else{
            setIdx(idx+1);
            setReview(reviews[idx]);
            
        }
        console.log(" after right",idx);

    }
    function supriseMeHandler(){
        setIdx((Math.random() * (reviews.length-1)).toFixed(0));
        console.log(idx);
        setReview(reviews[idx])
    }
   
    return (
        <div style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }} className="w-[630px] bg-white mt-[80px] py-12 px-10">
            <Card review={review} setReview={setReview} />
            <div>
                <div className="flex justify-center mt-4 gap-4 text-violet-400 text-[30px] font-bold">
                    <button onClick={leftClickHandler}
                     className="cursor-pointer hover:text-violet-500">
                        <FiChevronLeft />
                    </button>
                    <button onClick={rightClickHandler}
                    className="cursor-pointer hover:text-violet-500">
                        <FiChevronRight />
                    </button>
                </div>

                <button onClick={supriseMeHandler}
                 className="mt-4 bg-violet-400 hover:bg-violet-800 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white">
                Suprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial