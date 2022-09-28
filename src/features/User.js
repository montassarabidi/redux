import {createSlice} from '@reduxjs/toolkit'


export const userslice = createSlice({
    name:"user",
 initialState : {value : {email:"",nom:"",pro:"",adress:""} },
 reducers :{
  login : (state,action) => {
    state.value = action.payload
  },
 },
});
export const {login} = userslice.reducer
export default userslice.reducer;