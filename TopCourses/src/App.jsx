import { useEffect, useState } from 'react'
import React from 'react';
import './App.css'
import Cards from './Components/Cards.jsx';
import Filter from './Components/Filter.jsx';
import { apiUrl, filterData } from "./Components/data.jsx";
import Spinner from './Components/Spinner.jsx';
import {toast} from 'react-toastify';

function App() {
  let [course,setCourse] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourse(output.data);
    }catch{
      toast.error("Server Busy!!!")
      setLoading(true)
    }
    setLoading(false);
  }
  useEffect(()=>{fetchData()},[])


  return (
    <div className='min-h-screen  bg-bodyColor '>
      <div className="main-ctn flex flex-col">
         {/* heading */}
         <nav className='bg-customColor p-4'>
              <h1 className='text-center font-bold text-4xl text-white'>Top Courses</h1>
         </nav>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
          {/* <Cards/> */}
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading?<Spinner/>: <Cards courses={course}  category={category} setCategory={setCategory}/>
        }
      </div>
      </div>
    </div>
  )
}

export default App
