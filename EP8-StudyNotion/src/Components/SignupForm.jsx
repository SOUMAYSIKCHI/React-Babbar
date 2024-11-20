import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Dashboard from "../Pages/Dashboard";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [crtPass, setCrtPass] = useState(false);
  const [cnfPass, setCnfPass] = useState(false);
  const [accType,setAccType] = useState("student");
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    cnfPass: "",
    crtPass: "",
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
  function submitHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setformData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    if (formData.crtPass !== formData.cnfPass) {
      toast.error("Password Doesnot match");
    } else {
      setIsLoggedIn(true);
      navigate("/dashboard");
      toast.success("Account Created Successfully");
    }
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button 
        className={`
            ${accType==="student"?"bg-richblack-900 text-richblack-5  py-2 px-5 rounded-full":
            "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}
        `
        }
        onClick={()=>{setAccType("student")}}>
            Student
        </button>

        <button 
        className={`
            ${accType==="Instructor"?"bg-richblack-900 text-richblack-5  py-2 px-5 rounded-full":"bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}
        `
        }
        onClick={()=>{setAccType("Instructor")}}>
        Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <div className="flex gap-x-5 ">
          <label htmlFor="firstname" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              First Name<sup className="text-pink-700">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
              type="text"
              name="firstname"
              required
              placeholder="Enter first name"
              id="firstname"
              onChange={changeHandler}
              value={formData.firstname}
            />
          </label>
          <label htmlFor="lastname" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              Last Name <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
              type="text"
              name="lastname"
              required
              placeholder="Enter Last name"
              id="lastname"
              onChange={changeHandler}
              value={formData.lastname}
            />
          </label>
        </div>

        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
            Email Address <sup className="text-pink-700">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            required
            placeholder="Enter Email address"
          />
        </label>

        <div className="flex gap-x-5">
          <label htmlFor="crtPass" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              Create Password <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
              type={crtPass ? "text" : "password"}
              placeholder="Enter Password"
              name="crtPass"
              id="crtPass"
              onChange={changeHandler}
              value={formData.crtPass}
            />
            <span
              onClick={() => {
                setCrtPass((prev) => {
                  return !prev;
                });
              }}
              className="absolute right-3 cursor-pointer top-[39px]"
            >
              {crtPass ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>

          <label htmlFor="cnfPass" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              Create Password <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] w-full text-white p-[12px]"
              type={cnfPass ? "text" : "password"}
              placeholder="Confirm Password"
              name="cnfPass"
              id="cnfPass"
              onChange={changeHandler}
              value={formData.cnfPass}
              required
            />
            <span
              onClick={() => {
                setCnfPass((prev) => {
                  return !prev;
                });
              }}
              className="absolute right-3 cursor-pointer top-[39px]"
            >
              {cnfPass ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>
        </div>
        <button className="bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}
export default SignupForm;
