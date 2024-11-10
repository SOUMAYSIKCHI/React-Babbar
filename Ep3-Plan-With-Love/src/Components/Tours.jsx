import Card from "./Card";

function Tours(props) {
    // props.tour.map((element)=>{
    //     console.log({...element});
    // } )
    // console.log(props.removeHandler);
    return (
        <div className="main-ctn mt-20">
            <div className="heading flex justify-center mb-20">
                <h1 className="text-center font-bold text-[2.5rem] px-[5vw] py-[1vh] border-dashed border-[7px] rounded-[20px] border-blue-900">Plan With Love</h1>
            </div>
            <div className="cards flex flex-wrap justify-center">
                {
                    props.tour.map((element,index)=>{
                        return <Card key={index} data={element} removeHandler={props.removeHandler}></Card>
                    } )

                }
            </div>
        </div>
    )
}

export default Tours