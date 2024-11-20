import React from "react"
import Template from "../Components/Template"
import LoginImg from "../assets/login.png"
function Signup({title,desc1,desc2,isLoggedIn,setIsLoggedIn}){
    return(
        <Template formtype="signup" title={title} image={LoginImg} desc1={desc1} desc2={desc2} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    )
}

export default Signup