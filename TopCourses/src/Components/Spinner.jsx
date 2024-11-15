import React from 'react';
import './Spinner.css'
function Spinner(){
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className='spinner'></div>
            <div className='text-[30px] font-bold text-white'>Loading...</div>
        </div>
    )
}




export default Spinner;