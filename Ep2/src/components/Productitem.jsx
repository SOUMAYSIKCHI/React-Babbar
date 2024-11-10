import React, { useState } from 'react';
import ProductDate from './Productdate';
import Card from './Card';
import './Productitem.css';
function ProductItem(props) {
  const [title,setTitle] = useState(props.title);

  function clickHandler(){
    setTitle("popCorn");
    console.log("button clicked");
  }
  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;