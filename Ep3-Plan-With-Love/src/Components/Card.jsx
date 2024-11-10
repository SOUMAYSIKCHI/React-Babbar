import { useState } from "react";

function Card(props) {

    const [readMore, SetreadMore] = useState(false);
    // const description  = `${props.data.info.substring(0,200)}...`
    const [desc, setDesc] = useState(`${props.data.info.substring(0, 200)}...`);

    function readmoreHandler() {
        if (readMore == false) {
            SetreadMore(!readMore);
            setDesc(props.data.info);
        } else {
            SetreadMore(!readMore);
            setDesc(`${props.data.info.substring(0, 200)}...`);
        }
    }
    return (
        <div className="card">
            <img src={props.data.image} className="image w-[380px] object-cover aspect-square" alt="" />
            <div className="tour-info my-[20px] mx-[5px]">
                <div className="tour-details">
                    <h4 className="tour-price font-bold">Rs.{props.data.price}</h4>
                    <h4 className="tour-title font-bold text-[22px]">{props.data.name}</h4>
                </div>
                <div className="tour-description">{desc}
                    <span className="read-more cursor-pointer" onClick={readmoreHandler}>
                        {readMore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => { props.removeHandler(props.data.id) }}>Not Interested</button>
        </div>
    )
}

export default Card