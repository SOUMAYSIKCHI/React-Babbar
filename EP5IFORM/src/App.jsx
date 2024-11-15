import { React, useState } from "react";

import "./App.css";

function App() {
  // function changeHandler(event){
  //     console.log(event.target.value)
  // }

  // function lastName(e){
  //     console.log("last",e.target.value)
  // }
  // object
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    notRobot: false,
    gender: "",
    favCar:"",
  });

  console.log(formData);

  function changeHandler(e) {
    const { name, checked, value, type } = e.target;
    // console.log(name, checked, value, type);
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // console.log(formData);
  }

function submitHandler(event){
    event.preventDefault();
    console.log("Finally preventing the form data........")
    console.log(formData);
}
  return (
    <div>
      <h1>App</h1>
      <form onSubmit={submitHandler} action="">
        <br /> <br />
        <input
          className="border-2 p-2 border-zinc-950	"
          type="text"
          onChange={changeHandler}
          placeholder="Name"
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <br />
        <input
          className="border-2 p-2 border-zinc-950	"
          type="text"
          onChange={changeHandler}
          placeholder="lastname"
          name="lastName"
          value={formData.lastName}
        />
        <br /> <br /> <br />
        <textarea
          placeholder="Enter comments"
          className="border-2 p-2 border-zinc-700"
          name="comments"
          id="cmnts"
          onChange={changeHandler}
          value={formData.comments}
        ></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          name="notRobot"
          onChange={changeHandler}
          id="notRobot"
          checked={formData.notRobot}
        />
        <label htmlFor="notRobot">I am not a Robot</label>
        <br />
        <br />
        <fieldset className="border-2 p-4 border-sky-300">
          <legend>Gender</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="gender"
            value="Male"
            id="Male"
            checked={formData.gender === "Male"} //jab ui re-render hoga tho prev value ajayegi
          />
          <label htmlFor="Male">Male</label>
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="gender"
            value="Female"
            id="Female"
            checked={formData.gender === "Female"} //jab ui re-render hoga tho prev value ajayegi
          />
          <label htmlFor="Female">Female</label>
        </fieldset>
        <br /><br />
        <select  className="border-4 border-s-indigo-950"
        onChange={changeHandler}
        name="favCar" 
        id="favCar"
        value={formData.favCar}
        >
            <option value="scaprio">Scarpio</option>
            <option value="fartuner">Fartuner</option>
            <option value="thar">Thar</option>
            <option value="Legender">Legender</option>
            <option value="Defender">Defender</option>

        </select>
        <label className="border-2 p-2 border-blue-950" htmlFor="favCar">Tell me Your Fav Car</label>
        <br /><br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
