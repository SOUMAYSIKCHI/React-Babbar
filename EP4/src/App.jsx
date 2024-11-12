import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav.jsx'
import Cards from './Components/Cards.jsx';
import Filter from './Components/Filter.jsx';
import { apiUrl, filterData } from "./Components/Data.jsx";
import Spinner from './Components/Spinner.jsx';
import {toast} from 'react-toastify';

function App() {

  let [course,setCourse] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  async function fetchD(){
    setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourse(output.data);
       
      }catch{
        toast.error("Network me koi error");
      }
    setLoading(false);
  }
  useEffect(()=>{fetchD()},[])

  return (

    <div className="container bg-bodyColor min-h-screen flex flex-col">
      <div>
        <Nav />
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading?<Spinner/>: <Cards courses={course} category={category} setCategory={setCategory}/>
        }
      </div>
    </div>
  )
}

export default App
