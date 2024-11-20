import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto">
      <Link to="/">
        {" "}
        <img src={Logo} width={160} height={32} alt="" />{" "}
      </Link>

      <nav>
        <ul className="flex gap-x-6">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-white py-[8px] bg-[#1b2736] px-[12px] rounded-[8px] border border-[#343536]">Log in</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-white py-[8px] bg-[#1b2736] px-[12px] rounded-[8px] border border-[#343536]">Sign up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="text-white py-[8px] bg-[#1b2736] px-[12px] rounded-[8px] border border-[#343536]" onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
            } }>Log out</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-white py-[8px] bg-[#1b2736] px-[12px] rounded-[8px] border border-[#343536]">Dashboard</button>
          </Link>
        )}
      </div>


    </div>
  );
}

export default Navbar;
