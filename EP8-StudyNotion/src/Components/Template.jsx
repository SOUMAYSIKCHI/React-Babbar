import React from "react";
import frameImage from "../assets/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc"
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}){
    return(
        <div className="flex flex-row py-12 w-11/12 max-w-[1170px] mx-auto  justify-between">
            <div className="w-11/12 max-w-[440px]" >
                <h1 className="font-semibold text-richblack-5 text-[1.8rem] leading-[2.535rem]">{title}</h1>
                <p className="text-[1rem] leading-[1.65rem] mt-2">
                <span className="text-gray-400">{desc1}</span>
                <br />
                <span className="text-blue-100 italic">{desc2}</span></p>

                
                {
                    formtype=="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div className="flex w-full justify-center items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <div className="text-richblack-700">OR</div>
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                </div>

                <div className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6"><FcGoogle/> <p>Sign in with Google</p></div>
            </div>

            <div className="relative max-w-[440px]">
                <img  src={frameImage} alt="pattern" width={500} height={404} loading="lazy" />
                <img className="absolute top-[-10px] left-[-10px]" src={image} alt="student" width={558} height={504} loading="lazy" />
            </div>
        </div>
    )
}

export default Template;