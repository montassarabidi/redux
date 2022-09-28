import {configureStore} from '@reduxjs/toolkit'
import  useReducer  from './features/User'
export const Store = configureStore({
reducer :{
    user :useReducer,
},

})