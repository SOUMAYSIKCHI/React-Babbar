import './ProductForm.css'
import { useState } from "react";
function ProductForm(props){

    const [newtitle,setTitle] = useState('');
    const [newdate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value)
    }
    function dateChangeHandler(event){
        setDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const newproduct={
            title:newtitle,
            date:newdate
        };
        setTitle('');
        setDate('');

        props.onSaveProduct(newproduct);

        // console.log(newproduct);
    }
    return(
        <form onSubmit={submitHandler} className='new-form'>
         <div className='new-title'>
            <label htmlFor="titleInput">Title : </label>
            <input type="text" value={newtitle} id='titleInput'onChange={titleChangeHandler} />
        </div>
        <div className='new-date'>
            <label htmlFor="form-date">Date : </label>
            <input type="date" value={newdate} id='form-date' onChange={dateChangeHandler} min='2022-01-20' max='2025-01-01'/>
        </div>
        <div className='new-button'>
            <button type='submit'>Add Product</button>
        </div>
       </form>
    )
}

export default ProductForm;