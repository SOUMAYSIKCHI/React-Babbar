import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png"
function Login({title,desc1,desc2,isLoggedIn,setIsLoggedIn}){
    return(
        <Template formtype="login" title={title} image={signupImg} desc1={desc1} desc2={desc2} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    )
}

export default Login;