import { addUsers, authUsers } from "./actions"

const { createReducer } = require("@reduxjs/toolkit")

const initalState={
    users:[],
    authDetail:{}
}


const userReducer = createReducer(initalState,(builder)=>{

    builder.addCase(addUsers,(state,action)=>{
        state.users=[...state.users,...action.payload]
    }).addCase(authUsers,(state)=>{
        state.authDetail= state.users[0]
    })
    

})


export default userReducer