import { createSlice } from '@reduxjs/toolkit';
import {createAnewBrand,fetchAllBrand,updateBrand,deleteBrand} from '../Actions/brandActions';
import { CreateBrand } from '@/types/types';

const initialState= {
    Allbrands : {} as {Brand:CreateBrand}[],
    brand:{},
    loading:false,
    error:null as null | string
}

const brandSlice = createSlice({
    name:'Brand',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(createAnewBrand.pending,state=>{
            state.loading = true
        })
        .addCase(createAnewBrand.fulfilled,(state,action)=>{
            state.brand = action.payload,
            state.loading = false
        })
        .addCase(createAnewBrand.rejected,(state,action)=>{
            state.error = action.error as string
            state.loading = false
        })
        .addCase(fetchAllBrand.pending,state=>{
            state.loading = true
            state.error= null
        })
        .addCase(fetchAllBrand.fulfilled,(state,action)=>{
            state.Allbrands = action.payload
            state.loading = false
        })
        .addCase(fetchAllBrand.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateBrand.pending,state=>{
            state.loading = true
            state.error= null
        })
        .addCase(updateBrand.fulfilled,(state,action)=>{
            state.brand = action.payload
            state.loading =false
        })
        .addCase(updateBrand.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteBrand.pending,state=>{
            state.loading = true
        })
        .addCase(deleteBrand.fulfilled,(state,action)=>{
            state.loading = false
            state.brand = action.payload
        })
        .addCase(deleteBrand.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    },
})

export default brandSlice.reducer