import { createSlice } from '@reduxjs/toolkit'
import {getAllAddresses,createAddress,deleteAddress} from '../Actions/addressesActions'
import { CreateAddress } from '@/interfaces/addressInterface'

const initialstate = {
    AllAddress:[],
    address:{} as CreateAddress,
    status:{} as {success:boolean,message:string},
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
            .addCase(createAddress.pending,state=>{
                state.loading = true
            })
            .addCase(createAddress.fulfilled,(state,action)=>{
                state.address = action.payload
                state.loading = false
            })
            .addCase(createAddress.rejected,(state,action)=>{
                state.error = action.payload as string
                state.loading = false
            })
            .addCase(deleteAddress.pending,state=>{
            state.loading = true
            })
            .addCase(deleteAddress.fulfilled,(state,action)=>{
            state.status = action.payload
            state.loading = false
            })
            .addCase(deleteAddress.rejected,(state,action)=>{
            state.error = action.payload as string
            state.loading = false
            })
}

})


export default addressSlice.reducer
