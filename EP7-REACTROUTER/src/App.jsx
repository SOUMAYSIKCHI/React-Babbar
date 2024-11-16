import { useState } from "react";
import  Header from "./Header.jsx"
import Home from "./Home.jsx"
import "./App.css";
import { Route, Routes,Link,NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="*">Invalid</NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
      {/* 1st method */}
      {/* <Routes>
        <Route path="/" element={<div>Homepage</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/support" element={<div>Support</div>} />
        <Route path="*" element={<div>Invalid Page</div>} />
      </Routes> */}

       <Routes>
        <Route path="/" element={<Header/>} >
            <Route index  element={<Home/>}/> 
            <Route path="/about" element={<div>About</div>} />
            <Route path="/support" element={<div>Support</div>} />
            <Route path="*" element={<div>Invalid Page</div>} />
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
