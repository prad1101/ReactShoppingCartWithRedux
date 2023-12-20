import {createSlice } from '@reduxjs/toolkit'

const initialState={
    user:[],
    isloading:false,
    error:null    
}
const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.user.push(action.payload)
        },
        removeuser:(state,action)=>{
            const deletedUserId = action.payload;
            console.log(deletedUserId)
            state.user = state.user.filter(user => user.fname != deletedUserId[0]);
        },
     

    }

})

export const {addUser,removeuser}=userSlice.actions
export default userSlice.reducer