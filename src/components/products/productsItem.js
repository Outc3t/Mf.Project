 import React from "react";
import Cards from "../cards";

 export default function ProductsItem({title , image , price , id ,rating , description}){

return (

<div>
         <Cards title={title} image={image} price={price} description={description} id={id}/>
 
</div>


)


 }