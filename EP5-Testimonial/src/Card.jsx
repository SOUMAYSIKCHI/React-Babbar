import React from "react";
import {FaQuoteLeft,FaQuoteRight,FaGem} from 'react-icons/fa';
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa6";

function Card(){
    return(
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <FaQuoteLeft/>
                <p></p>
                <FaQuoteRight/>
            </div>
            <div>
                <div>
                    <button><FaAngleRight /></button>
                    <button><FaAngleLeft />
                    </button>
                </div>
                    <button></button>
            </div>
        </div>
    )
}

export default Card