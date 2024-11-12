import React from "react";
import { useState } from "react";
function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        console.log(title);
        setCategory(title);
    }
    return (

        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((ele) => (
                    <button onClick={() => filterHandler(ele.title)} 
                    className={`text-lg px-2 py-1 
                    rounded-md font-medium
                    text-white bg-black hover:bg-opacity-50 border-2
                    transition-all duration-200
                    ${category===ele.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}
                    `}
                      key={ele.id} >{ele.title}</button>
                ))
            }
        </div>

    )
}

export default Filter;