import React, { useEffect, useState } from "react";
import LoadingHOC from "../HOC/loadingHOC";
import TextField from '@mui/material/TextField';
import {Button, Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import useRequest from "../hooks/request";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { debounceTime, Subject } from "rxjs";
export default function Login(){

const {run,data,load,error} = useRequest()

const dispatch = useDispatch()
const navigate = useNavigate()
const userDetail = localStorage.getItem("user")
const [type,setType]= useState("password")
const [username,setUsername] = useState()
const [pass,setPass] = useState()

useEffect(()=>{
if(userDetail) {navigate('/')}
},[])
const handleSubmit = ()=>{
if((pass!="" && pass!=undefined) && (username!="" && username!=undefined) ){

localStorage.setItem("user",JSON.stringify({username,pass}))
window.location.reload()
navigate('/')

}
else{

alert("pls fill compeletely")


}


}


return (







<div>

<div className="mt-16 ">
    <p className="text-center font-bold text-xl text-[#0000FF] ">Login Page </p>

    <div className="mt-16 mx-auto flex justify-center ">
<div>

    <p className="font-bold text-[#0000FF] mb-6">
    username:
</p>
    <TextField id="outlined-basic" label="username" variant="outlined" className="d-block w-[50vw]" onKeyUp={(e)=>{
        setUsername(e.target.value)
    }}/>
    <p className="font-bold text-[#0000FF] mb-6 mt-6">
    password:
</p>
<div className="mb-16">
  <TextField id="outlined-basic" label="password" variant="outlined" className="d-block mb-6 w-[50vw]" type={type} onKeyUp={(e)=>{
    setPass(e.target.value)
  }}/>
     <FormControlLabel required control={<Checkbox />} label="show Password" onChange={()=>{
        if(type==="password"){
            setType("text") 
        }
       else{
        setType("password")
       }
     }} />

</div>
<div className="flex justify-center pt-16 ">
<Button variant="contained" className="w-1/2" onClick={()=>{
handleSubmit()
}}>
Login
</Button>
</div>



   
</div>


    </div>

</div>



</div>



)












}