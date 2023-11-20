import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";




export default function AccManager () {

    const accDetail =  JSON.parse(localStorage.getItem('user')) ; 

    const navigate = useNavigate();
    const LogOut = ()=>{
        localStorage.removeItem('user');
        navigate('/')
        window.location.reload();
        
        
            };






return (

<div>
<p className="text-bold text-xl mt-16  text-center">username : {accDetail?.username}</p>
<p className="text-bold text-xl mt-16 text-center">
    password : {accDetail?.pass}
</p>

<div className="flex w-full justify-center mt-16" >
<Button variant="contained" className="mx-auto" onClick={()=>{
    LogOut();
}} >
Log Out

</Button>
</div>



</div>



)




}