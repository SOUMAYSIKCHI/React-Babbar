import React, { useState } from "react";
import Card from "./Card";
function Cards(props) {
    let courses = props.courses; 
    let category = props.category;
    const [likedCourse,setLiked]= useState([]);
    const coursedata = [];
    Object.values(courses).forEach((array) => {
        array.forEach((data) => coursedata.push(data));
    });
    function getCourses() {
        console.log(likedCourse);
        if (category === "All") {
            let allcourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((data) => allcourses.push(data));
            });
            return allcourses;
        } else if(category==="Favourites"){
             let finalArr = [];
             coursedata.forEach((ele) => {
                if (likedCourse.includes(ele.id)) {
                    finalArr.push(ele);
                }
            });
            console.log(finalArr);
            return finalArr;
            // or
            // let finalArr = allcourses.filter((ele) => likedCourse.includes(ele.id));
        }else{
            return courses[category];
        }
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {getCourses().map((course) => (
                <Card key={course.id} data={course} likedCourse={likedCourse} setLiked={setLiked}/>
            ))}
        </div>
    );
}

export default Cards;
