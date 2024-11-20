import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="bg-[hsla(216,52%,6%,1)] w-screen h-screen flex flex-col font-inter text-white overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              title="Welcome Back"
              desc1="Build skills for today, tomorrow, and beyond."
              desc2="Education to future-proof your career."
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              title="Join the millions learning to code with StudyNotion for free"
              desc1="Build skills for today, tomorrow, and beyond."
              desc2="Education to future-proof your career."
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
            </PrivateRoute>
            } />
      </Routes>
    </div>
  );
}

export default App;
