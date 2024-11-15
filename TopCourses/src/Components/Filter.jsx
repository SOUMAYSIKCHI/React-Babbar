import filterData from "./data.jsx"
import React from "react";
function Filter(props){
    let courses = props.courses;
    let category = props.category;
    const filterData = props.filterData;
    let setCategory = props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }
    return(<>
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((element)=>{
                    return <button key={element.id} onClick={()=>filterHandler(element.title)} className="text-lg px-2 py-1 
                    rounded-md font-medium
                    text-white bg-customColor hover:bg-opacity-50 border-2
                    transition-all duration-200">{element.title}</button>
                })
            }
        </div>
    
    </>)
}

export default Filter