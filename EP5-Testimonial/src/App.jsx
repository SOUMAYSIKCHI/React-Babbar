import { useState } from 'react'
import React from 'react'
import './App.css'
import Testimonial from './Testimonial';

function App() {

  return (
    <div className='min-h-screen bg-grey-200 flex justify-center items-center'>
      <div className='flex flex-col items-center gap-1'>
         <h1 className=' text-black text-[36px] font-sans font-bold'>Our Testimonials</h1>
         <div className='bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto'></div>
         <Testimonial/>
      </div>
    </div>
  )
}

export default App
