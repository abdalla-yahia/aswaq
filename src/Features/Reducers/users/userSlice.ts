import { fetchAllUsers,fetchUserById } from "@/Features/Actions/users/usersActions"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:[],
    loading:true,
    error:null 
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
        state.user = action?.payload
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
}
})

export default usersSlice.reducer;