import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderContainer from "./components/header/headerContainer";
import ProductsPage from "./page/products";
import Product from "./page/product";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import useRequest from "./hooks/request";
import Login from "./page/login";
import AccManager from "./page/acc";
import About from "./page/about";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = function(){
const dispatch = useDispatch()
const{run,data,load} = useRequest()


useEffect(()=>{

 const localuser= localStorage.getItem("username:")
console.log(localuser)
},[])

// useEffect(()=>{


// run('users')

// },[])
// useEffect(()=>{

// if(data.length){
// dispatch(addUsers(data))
// }
  
//   },[data])

  return (<>
  <HeaderContainer/>
  <Outlet/>

  </>);
};
const routers = createBrowserRouter([
{path : "/",
element: <Layout/>,
children: [
  {
    path:'/products',
    element: <ProductsPage/>
  },
  {
    path:'/products/:productId',
    element: <Product/>
  },
  {
    path:'/login',
    element : <Login/>
  },
  {
    path: 'accmanage',
    element: <AccManager/>
  }, 
  {
    path : 'about',
    element : <About/>
  }
 
]


}
]);

root.render(
  <Provider store={store}>

     <RouterProvider router={routers} />
  </Provider>
   
  


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
