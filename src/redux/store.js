import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/users";


const store = configureStore({
reducer :{
    users : userReducer,
    cart : cartReducer
}


})
export default store