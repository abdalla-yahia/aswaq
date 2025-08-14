import { createSlice } from '@reduxjs/toolkit'
import {getAllAddresses} from '../Actions/addressesActions'

const initialstate = {
    address:[],
    loading:false,
    error:null  as string | null,
}

const addressSlice = createSlice({
    name:'address',
    initialState:initialstate,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAllAddresses.pending,(state)=>{
            state.loading = true
            })
            .addCase(getAllAddresses.fulfilled,(state,action)=>{
            state.address = action.payload
            state.loading = false
            })
            .addCase(getAllAddresses.rejected,(state,action)=>{
            state.error = action.payload as string
            state.loading = false
            })
}

})


export default addressSlice.reducer
