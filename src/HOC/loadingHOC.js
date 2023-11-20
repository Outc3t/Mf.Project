import React from "react";
import Loader from "../components/loader/loader";

export default function LoadingHOC ({load,children}) {

if(load) return<Loader/>
return <>
{children}
</>

}