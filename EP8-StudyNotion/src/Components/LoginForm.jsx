import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import toast from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showpassword, setshowpassword] = useState(false);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setformData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function formHandler(e) {
    e.preventDefault();
    const { name, type, value, checked } = e.target;
    setformData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    toast.success("Logged successfully");
    console.log(formData);
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={formHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label htmlFor="email" className="w-full">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
          Email Address
          <sup className="text-pink-700">*</sup>
        </p>
        <input className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
          onChange={changeHandler}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          required
          placeholder="Enter email address"
        />
      </label>
      <label htmlFor="password" className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
          Password <sup className="text-pink-700">*</sup>
        </p>
        <input
          onChange={changeHandler}
          type={showpassword ? "text" : "password"}
          name="password"
          id="password"
          value={formData.password}
          required
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
        />
        <span
          onClick={() => {
            setshowpassword((prev) => {
              return !prev;
            });
          }}
        className="absolute right-3 cursor-pointer top-[39px]" 
        >
        {showpassword ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}{" "}
        </span>
        <Link to="#">
          <p className="text-end mt-1 text-xs text-blue-100">Forgot Password</p>
        </Link>
      </label>

      <button 
      className="bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
      >
        Sign In</button>
    </form>
  );
}

export default LoginForm;
