import { useState } from 'react'
import React from 'react'
import './App.css'
import Testimonial from './Testimonial';
import  reviews from './data'
function App() {

  return (
    <div className='min-h-screen bg-grey-200 w-[100vw] flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center text-center '>
         <h1 className=' text-black text-[36px] font-sans font-bold'>Our Testimonials</h1>
         <div className='bg-violet-400 h-[4px] w-[120px]  mt-1 mx-auto '></div>
         <Testimonial reviews = {reviews}/>
      </div>
    </div>
  )
}

export default App
