/* eslint-disable @typescript-eslint/no-unused-expressions */
import { fetchAllUsers,fetchUserById,createUser,loginUser,deleteUser } from "@/Features/Actions/users/usersActions"
import { FormState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users:[],
    user:{} as {user:FormState},
    loading:false as boolean,
    error:null as string|null
}

const usersSlice = createSlice({
    name : 'Users',
    initialState,
    reducers:{},
     extraReducers: builder => {
    builder
    .addCase(fetchAllUsers.pending,(state)=>{
        state.loading = true,
        state.error = null
    })
    .addCase(fetchAllUsers.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action?.payload
    })
    .addCase(fetchAllUsers.rejected,(state)=>{
        state.loading = false,
        state.error = null
    })
    .addCase(fetchUserById.pending,(state)=>{
        state.loading = true,
        state.error = null 
    })
    .addCase(fetchUserById.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action?.payload
    })
    .addCase(fetchUserById.rejected,(state)=>{
        state.loading = false,
        state.error = null
    })
    .addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
    })
    .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
    })
    .addCase(loginUser.pending,state=>{
        state.loading = true
        state.error = null
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
        state.user = action.payload,
        state.loading = false
    })
    .addCase(loginUser.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
    })
    .addCase(deleteUser.pending,state=>{
        state.loading = true
        state.error = null
    })
    .addCase(deleteUser.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action.payload
    })
    .addCase(deleteUser.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
    })
}
})

export default usersSlice.reducer;