import { CREATE_CATEGORY, GET_ALL_CATEGORIES, UPDATE_CATEGORY } from "@/Graphql/Schemas/CategoryQuery";
import { client } from "@/libs/Apollo/ApolloClient";
import { CreateCategory, UpdateCategory } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Create Category
export const createAnewCategory = createAsyncThunk('category/create',async(Data:CreateCategory)=>{
    try {
        const {data} = await client.mutate({
            mutation:CREATE_CATEGORY,
            variables:Data
        })
        if(data?.createCategoey?.success === false){
            toast.error(data?.createCategoey?.message)
        }else toast.success('تم إنشاء التصنيف بنجاح')
        return data?.createCategoey;
    } catch (error) {
        toast.error('فشل في انشاء التصنيف الجديد')
        console.error(error)
    }
})

//Fetch All Category 
export const fetchAllCategory = createAsyncThunk('category/getAll',async()=>{
    try {
        const {data} = await client.query({
            query:GET_ALL_CATEGORIES
        })
        if(data?.AllCategories?.success === false){
            toast.error(data?.AllCategories?.message)
        }
        return data?.AllCategories
    } catch (error) {
        toast.error('فشل في جلب التصنيفات')
        console.error(error)
    }
})

//Update Category 
export const updateCategory = createAsyncThunk('category/update',async (NewData:UpdateCategory)=>{
    try {
        const {data} = await client.mutate({
            mutation:UPDATE_CATEGORY,
            variables:NewData
        })
        if(data?.updateACategory?.success === false){
            toast.error(data?.updateACategory?.message)
        }else toast.success('تم نحديث التصنيف بنجاح')
        return data?.updateACategory
    } catch (error) {
        toast.error('فشل فى تحديث التصنيف')
        console.error(error)
    }
})