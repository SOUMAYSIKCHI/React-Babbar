import React, { useState,useEffect } from "react";
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';

function Card(props){
    let course = props.data;
    let [readMore, setReadMore] = useState(false);
    let likedCourse = props.likedCourse;
    let setLiked = props.setLiked;
    const [desc, setDesc] = useState(`${props.data.description.substring(0, 100)}...`);
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
        if(likedCourse.includes(course.id)){
            console.log(course);
            setLiked((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like removed");
        }
        else{
            if(likedCourse.length===0){
                setLiked([course.id]);
            }else{
                setLiked((prev)=>[...prev,course.id]);
            }
        }
        toast.success("Like added!!");
    }

    // just for debugginhg
    // useEffect(() => {
    //     console.log("Liked courses:", likedCourse); // Debugging
    // }, [likedCourse]);


    return (
        <div className="bg-customColor max-w-[300px] rounded-md">
            <div className="relative ">
                <img src={course.image.url} alt="" />
                <div className="dilkabutton w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center absolute right-2 bottom-[-12px]">
                    <button onClick={clickHandler}>
                        {
                          likedCourse.includes(course.id)? <FcLike fontSize="1.70rem"/>:<FcLikePlaceholder fontSize="1.70rem"/>
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">{desc}</p>
                <span className="read-more cursor-pointer text-blue-500" onClick={readmoreHandler}>
                    {readMore ? `Show less..` : `Read more..`}
                </span>
            </div>
        </div>
    );
}

export default Card