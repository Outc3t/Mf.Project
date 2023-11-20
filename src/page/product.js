import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useParams} from 'react-router-dom' 
import LoadingHOC from "../HOC/loadingHOC";
import useRequest from "../hooks/request";
import { addToCart } from "../redux/reducers/actions";
export default function Product(){

const {productId} = useParams()

const {run , load , data} = useRequest()

const dispatch = useDispatch()


useEffect(()=>{
run(`products/${productId}`)
},[])
return <div> 
    
    <LoadingHOC load={load}>
<div className="flex-column justify-center p-4">
    
    <div className="flex w-full justify-center mb-16">

       <img src={data.image} className="w-1/4 h-[25rem] hover:outline ">
    
    
    </img>  
    </div>
   
     <div className="flex w-full justify-content-center mb-10">
<h2 className="font-bold text-xl text-center w-full">
{data.title}
</h2>

     </div>

     <div className="flex w-full justify-center mb-20">

<p className=" text-l text-center w-full">
{data.description}
</p>
     </div>
    
     <div className="flex w-full justify-center self-end">
        <div className=" w-1/3 justify-center flex">
<Button onClick={()=>{
            alert('added')
            dispatch(addToCart(data))
        }} variant="contained" color="success"  className="w-1/8" >
Add to cart
        </Button>
    
<h4 className="w-1/6 font-bold text-xl mx-4">{data.price + '$'}</h4>

        </div>
        
        
    </div>
    </div>

    </LoadingHOC>
    
     </div>


}