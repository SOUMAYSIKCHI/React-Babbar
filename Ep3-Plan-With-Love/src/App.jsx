import { useState } from 'react'
import './App.css'
import './index.css'
import data from './data'
import Tours from './Components/Tours';
function App() {

    const [tours, setTours] = useState(data);
    
    function removeHandler(id){
        let newTours = tours.filter((idx)=>idx.id!==id)
        setTours(newTours);
    }
    if(tours.length===0){
        return(
            <div className='refresh'>
                <h1 className='text-[40px] font-bold'>No Tours left</h1>
                <button className='btn-white' onClick={()=>setTours(data)}>Refresh</button>
            </div>
        );
    }

    return (
        <div className='App w-[1480px] m-auto'>
            <Tours tour={tours} removeHandler={removeHandler} >
            </Tours>
        </div>
    )
}

export default App
