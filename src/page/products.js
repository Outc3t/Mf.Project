import React, { useEffect, useState } from "react";
import ProductsItem from "../components/products/productsItem";
import LoadingHOC from "../HOC/loadingHOC";
import useRequest from "../hooks/request";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function ProductsPage (){

    const {run , data , load} = useRequest()

    const [url,setUrl]= useState()

useEffect(()=>{
    run('products')
},[])
// console.log(load,data)
    return (
        
<div className="flex justify-content-center mx-6 p-6 flex-wrap">
    <LoadingHOC load={load} >
<div className="w-full">

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
    
          label="categories"
          onChange={(e)=>{
            console.log(e.target.value)
             run("products/category/" + (e.target.value))

          }}
        >
          <MenuItem value={"electronics"}>electronics</MenuItem>
          <MenuItem value={"jewelery"}>jewelery</MenuItem>
          <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
          <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
        </Select>
      </FormControl>
    </Box>





</div>
{data.map(item=>(<ProductsItem key={item.id} {...item}/>))} 


 

        </LoadingHOC>   
       
        
        



</div>
  




    )


}