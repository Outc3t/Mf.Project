import { Button } from "@mui/material";
import { createReducer } from "@reduxjs/toolkit";
import react, { useEffect, useRef, useState } from "react" 
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react";
import ProductsItem from "../products/productsItem";





export default function HeaderContainer() {

    const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = () => {
if(userDetail) {
 setOpen(true);
    setScroll('paper');

}
else{
alert('you need to login first')

}



   
  

  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
    













 const userDetail =  JSON.parse( localStorage.getItem('user')) 
const cartDetail = useSelector((state)=> state.cart.cart)

const Links = [{
    path : '/' , title : "Home" 
},
{
    path : '/products' , title : 'Products'
},
{
    path : '/about' , title : 'About'
}
   
];
return( <><div className="bg-[#808080] py-6">

 {Links.map((item,index) =>{
    return <NavLink to={item.path} key={'NavLinks' + item}  className={({isActive})=> `m-2 p-2 text-bold  ${isActive && 'text-[#1974D2]'}`}>
{item.title}
    </NavLink>
 })
 }

{(userDetail)?<NavLink to={'/accmanage'} className={({isActive})=> `m-2 p-2 text-bold  ${isActive && 'text-[#1974D2]'}`}>Manage account</NavLink>: <NavLink to={'/login'} className={({isActive})=> `m-2 p-2  text-bold ${isActive && 'text-[#1974D2]'}`}>
login
    </NavLink>}

    <Button onClick={()=>{
handleClickOpen()
    }}>
cart {Object.keys(cartDetail).length>0 && Object.keys(cartDetail).length}

    </Button>
</div>

<Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{userDetail?userDetail.username :"unknown"}  's card</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           {Object.values(cartDetail).map(item =>{
            return <ProductsItem key={item.id} {...item}/>
           })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={()=>{
            if(Object.keys(cartDetail).length>0){
                window.location.reload()
            }
            else{
                alert('there is nothing in the cart')
            }
            }}>Delete All</Button>
        </DialogActions>
      </Dialog>















</>
)

}