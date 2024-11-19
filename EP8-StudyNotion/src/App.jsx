import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import{ React,useState }from 'react';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
