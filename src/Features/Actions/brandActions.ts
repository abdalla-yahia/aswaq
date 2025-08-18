import { CREATE_BRAND, DELETE_BRAND, GET_ALL_BRANDS, UPDATE_BRAND } from "@/Graphql/Schemas/BrandQuery";
import { client } from "@/libs/Apollo/ApolloClient";
import { CreateBrand, UpdateBrand } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Create Brand
export const createAnewBrand = createAsyncThunk('Brand/create',async(Data:CreateBrand)=>{
    try {
        const {data} = await client.mutate({
            mutation:CREATE_BRAND,
            variables:Data
        })
        if(data?.createBrand?.success === false){
            toast.error(data?.createBrand?.message)
        }else toast.success('تم إنشاء البراند بنجاح')
        return data?.createBrand;
    } catch (error) {
        toast.error('فشل في انشاء البراند الجديد')
        console.error(error)
    }
})

//Fetch All Brand 
export const fetchAllBrand = createAsyncThunk('Brand/getAll',async()=>{
    try {
        const {data} = await client.query({
            query:GET_ALL_BRANDS
        })
        if(data?.AllBrands?.success === false){
            toast.error(data?.AllBrands?.message)
        }
        return data?.AllBrands
    } catch (error) {
        toast.error('فشل في جلب البراندات')
        console.error(error)
    }
})

//Update Brand 
export const updateBrand = createAsyncThunk('Brand/update',async (NewData:UpdateBrand)=>{
    try {
        const {data} = await client.mutate({
            mutation:UPDATE_BRAND,
            variables:NewData
        })
        if(data?.updateABrand?.success === false){
            toast.error(data?.updateABrand?.message)
        }else toast.success('تم نحديث البراند بنجاح')
        return data?.updateABrand
    } catch (error) {
        toast.error('فشل فى تحديث البراند')
        console.error(error)
    }
})

//Delete Brand
export const deleteBrand = createAsyncThunk('Brand/delete',async(id:string)=>{
    try {
        const {data}= await client.mutate({
            mutation:DELETE_BRAND,
            variables:{id}
        })
        if(data?.deleteABrand?.success === false){
            toast.error(data?.deleteABrand?.message)
        }else toast.success('تم حذف البراند بنجاح')
        return data?.deleteABrand
    } catch (error) {
        toast.error('فشل في حذف البراند')
        console.error(error)
    }
})