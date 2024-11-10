import { useState } from 'react'
import './App.css'


function App() {

  const [count,setCount] = useState(0);

  function increaseHandler(){
    setCount(count+1);
  }
  function decreaseHandler(){
    if(count>0){
      setCount(count-1);
    }
  }
  function resetHandler(){
      setCount(0);
  }
 
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
       <div className="heading text-[#41b3ff] font-medium text-3xl">Increment && Decrement</div>
       <div className='bg-white flex justify-evenly  py-3 rounded-sm text-[25px]'>
          <button onClick={decreaseHandler}className='border-r-2 text-center w-20 border-[#bfbfbf] text-[25px]'>-</button>
          <div className='px-10'>{count}</div>
          <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-[25px]'>+</button>
       </div>
       <button onClick={resetHandler} className=' text-2xl text-white bg-blue-400 px-6 py-2 rounded-sm'>Reset</button>
    </div>
  )
}

export default App
