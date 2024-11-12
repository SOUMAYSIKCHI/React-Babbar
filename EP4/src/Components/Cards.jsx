import React from "react"
import Card from './Card';
function Cards(props) {
    let courses = props.courses;
    console.log(courses);
    let category = props.category;
    console.log( courses[category]);
    
    function getCourses() {
        if (category === "All") {
            let allcourses = []
            Object.values(courses).forEach(array => {
                array.forEach(data =>
                    allcourses.push(data))
            })
            return allcourses;
        }else{
            return courses[category];
        }
    }


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id} data={course} />
                ))

            }
        </div>
    )
}

export default Cards