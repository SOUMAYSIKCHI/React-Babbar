import React, { useState } from "react";
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';
function Card(props) {
    let course = props.data;
    let [readMore, setReadMore] = useState(false);
    const [desc, setDesc] = useState(`${props.data.description.substring(0, 100)}...`);
    let [liked,setLiked] = useState(false);
    function readmoreHandler() {
        if (readMore) {
            setReadMore(false);
            setDesc(`${props.data.description.substring(0, 100)}...`);
        } else {
            setReadMore(true);
            setDesc(props.data.description);
        }
    }

    function clickHandler(){
        if(liked){
            setLiked(false);
            toast.warning("Removed from Fav!");
        }else{
            setLiked(true);
            toast.success("Add to favourite!");
        }
    }


    return (
        <div className="bg-customColor max-w-[300px] rounded-md">
            <div className="relative ">
                <img src={course.image.url} alt="" />
                <div className="dilkabutton w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center absolute right-2 bottom-[-12px]">
                    <button onClick={clickHandler}>
                        {
                            liked ? <FcLike fontSize="1.70rem"/>:<FcLikePlaceholder fontSize="1.70rem"/>
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">{desc}</p>
                <span className="read-more cursor-pointer" onClick={readmoreHandler}>
                    {readMore ? `Show less` : `Read more`}
                </span>
            </div>
        </div>
    );
}

export default Card;
