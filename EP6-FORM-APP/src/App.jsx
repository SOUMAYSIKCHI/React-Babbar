import { React, useState } from "react";
import {toast} from 'react-toastify'
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    countryname: "",
    stadr: "",
    cityname: "",
    statezip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotif: "",
  });

  function formHandler(e) {
    const { name, type, value, checked } = e.target;
    // console.log(name, type, value, checked);
    // console.log(e.target.value);
    setformData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log("Form submited:");
    toast.success("Form submitted");
    
  }
  return (
    <div className="form-box w-full md:max-w-[50%] mx-auto  p-8">
      <form action="" onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="firstname">First name</label>
        <input
          onChange={formHandler}
          type="text"
          name="firstname"
          id="firstname"
          value={formData.firstname}
        />

        {/* last name */}
        <label htmlFor="lastname">Last name</label>
        <input
          onChange={formHandler}
          type="text"
          name="lastname"
          id="lastname"
          value={formData.lastname}
        />

        {/* email */}
        <label htmlFor="email">Email address</label>
        <input
          onChange={formHandler}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          required
          
        />

        {/* Country */}
        <label htmlFor="countryname">Country</label>
        <select
          onChange={formHandler}
          name="countryname"
          id="countryname"
          value={formData.countryname}
        >
          <option value="" disabled>
            Select country
          </option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Street address */}
        <label htmlFor="stadr">Street address</label>
        <input
          onChange={formHandler}
          type="text"
          name="stadr"
          id="stadr"
          value={formData.stadr}
        />

        {/* City */}
        <label htmlFor="cityname">City</label>
        <input
          onChange={formHandler}
          type="text"
          name="cityname"
          id="cityname"
          value={formData.cityname}
        />

        {/* State/Province */}
        <label htmlFor="statezip">State/Province</label>
        <input
          onChange={formHandler}
          type="text"
          name="statezip"
          id="statezip"
          value={formData.statezip}
        />

        {/* By Email */}

        <fieldset>
          <legend className=" mt-4 mb-3">By Email</legend>

          {/* comments  */}
          <div className="cmnt flex gap-3 items-center mb-3">
            <input
              onChange={formHandler}
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          {/* candidates */}
          <div className="cmnt flex gap-3 items-center mb-3">
            <input
              onChange={formHandler}
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          {/* offers */}
          <div className="cmnt flex gap-3 items-center mb-3">
            <input
              onChange={formHandler}
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
          {/* end of it */}
        </fieldset>
        {/* end of byemail */}

        {/* Push Notification */}
        <fieldset>
          <legend className="mb-0">Push Notification</legend>
          <p className="mb-2">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="flex gap-3 items-start">
            <input
              className="mb-0"
              onChange={formHandler}
              type="radio"
              name="pushnotif"
              id="everything"
              value="Everything"
              checked={formData.pushnotif === "Everything"} //jab ui re-render hoga tho prev value ajayegi
            />
            <label className="pt-[7px] mb-0" htmlFor="everything">
              Everything
            </label>
          </div>
          <div className="flex gap-3 items-start">
            <input
              className="mb-0"
              onChange={formHandler}
              type="radio"
              name="pushnotif"
              id="nonotif"
              value="nonotif"
              checked={formData.pushnotif === "nonotif"} //jab ui re-render hoga tho prev value ajayegi
            />
            <label className="pt-[7px]" htmlFor="nonotif">
              No push notifications
            </label>
          </div>
          <div className="flex gap-3 items-start">
            <input
              className="mb-0"
              onChange={formHandler}
              type="radio"
              name="pushnotif"
              id="sameasemail"
              value="sameasemail"
              checked={formData.pushnotif === "sameasemail"} //jab ui re-render hoga tho prev value ajayegi
            />
            <label className="pt-[7px]" htmlFor="sameasemail">
              Same as email
            </label>
          </div>
        </fieldset>

        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
