import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly p-2 text-2xl">
      <Link to="/">
        {" "}
        <img src={Logo} width={160} height={32} alt="" />{" "}
      </Link>

      <nav>
        <ul className="flex gap-3">
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
      <div className="flex gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
            } }>Logout</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
