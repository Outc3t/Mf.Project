import React,{useState} from "react";
import { BASE_URL } from "../constants/url";
import axios from "axios"

export default function useRequest(){
const [load,setLoad] = useState(true)
const [data,setData] = useState([])
const [error,setError]= useState()
function run (path,method="GET",params,body){
    
const url =  BASE_URL + path

if(method==="GET"){
   axios.get(url,{params,body}).then(function (res) {
setData(res.data)
setLoad(false)
    }).catch(function (error){
        console.log(error)
        setError("there is a problem")
    })


}
else{


    axios.post(url,{params,body}).then(function (res) {
        setData(res.data)
        setLoad(false)
            }).catch(function (error){
                console.log(error)
                setError("there is a problem")
            })
        




}
 
};

return {run , data , load}
}