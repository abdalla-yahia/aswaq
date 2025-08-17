import { createSlice } from '@reduxjs/toolkit';
import {createAnewCategory,fetchAllCategory,updateCategory} from '../Actions/categoryActions';
import { CreateCategory } from '@/types/types';

const initialState= {
    Allcategories : {} as {category:CreateCategory}[],
    category:{},
    loading:false,
    error:null as null | string
}

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(createAnewCategory.pending,state=>{
            state.loading = true
        })
        .addCase(createAnewCategory.fulfilled,(state,action)=>{
            state.category = action.payload,
            state.loading = false
        })
        .addCase(createAnewCategory.rejected,(state,action)=>{
            state.error = action.error as string
            state.loading = false
        })
        .addCase(fetchAllCategory.pending,state=>{
            state.loading = true
            state.error= null
        })
        .addCase(fetchAllCategory.fulfilled,(state,action)=>{
            state.Allcategories = action.payload
            state.loading = false
        })
        .addCase(fetchAllCategory.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateCategory.pending,state=>{
            state.loading = true
            state.error= null
        })
        .addCase(updateCategory.fulfilled,(state,action)=>{
            state.category = action.payload
            state.loading =false
        })
        .addCase(updateCategory.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    },
})

export default categorySlice.reducer