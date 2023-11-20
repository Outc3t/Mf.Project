import { addToCart } from "./actions"


const { createReducer } = require("@reduxjs/toolkit")

const initalState={
    cart :{},
  
}


const cartReducer = createReducer(initalState,(builder)=>{

    builder.addCase(addToCart,(state,action)=>{
        state.cart[action.payload.id]=action.payload
    })

})


export default cartReducer