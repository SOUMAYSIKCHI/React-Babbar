import React from 'react';
import ProductItem from './Productitem';
import Card from './Card';
import './Products.css';
import NewProduct from './NewProduct';
import { useState } from "react";
const Products = (props) => {
  // function printProps(){
  //   props.items.map((item,index)=>{
  //     console.log(item);
  //   })
  // } printProps();

  // const [cardData,setCardData] = useState(props);
  function printproductData(data){
    console.log(props);
    console.log("Sare product vale ke andar hu : ",data);
    // console.log(cardData);
  }
 
  return (
    <Card className="products">
      <NewProduct soumay = {printproductData}/>
      {
      props.items.map((item, index) => (
        <ProductItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))


      }
    </Card>
  );
}

export default Products;