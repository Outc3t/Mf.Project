import { createAction, nanoid } from '@reduxjs/toolkit'
export const ADD_USERS ='ADD_USERS'
export const AUTH_USER ='AUTH_USER'
export const ADD_TO_CART ='ADD_TO_CART'

export const addUsers = createAction(ADD_USERS)
export const authUsers = createAction(AUTH_USER)

export const addToCart = createAction(ADD_TO_CART)

