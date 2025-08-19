import { CREATE_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, UPDATE_ADDRESS } from "@/Graphql/Schemas/AddressQuery";
import { CreateAddress } from "@/interfaces/addressInterface";
import { client } from "@/libs/Apollo/ApolloClient";
import { ApolloError } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All Addresses
export const getAllAddresses = createAsyncThunk('address/getall',async (_,thunkAPI)=>{
    try {
        const {data} = await client.query({
            query: GET_ALL_ADDRESSES
        })
        return data?.addresses
    } catch (error) {
         const message = error instanceof ApolloError
        ? error?.message
        : 'فشل في تعديل المستخدم !! ';
        toast.error(message);
        return thunkAPI?.rejectWithValue(error)
    }
})

//Create Address
export const createAddress  = createAsyncThunk('address/create',async (NewAddress:CreateAddress,thunkAPI)=>{
    try {
        const {data} = await client.mutate({
        mutation: CREATE_ADDRESS,
        variables: NewAddress
        })
        return data?.createAddress
    } catch (error) {
        const message = error instanceof ApolloError
        ? error?.message
        : 'فشل في إنشاء العنوان !! ';
        toast.error(message);
        return thunkAPI?.rejectWithValue(error)
        }
        })

//Edit Address
export const updateAddress = createAsyncThunk('address/update',async(NewData:CreateAddress)=>{
    try {
        const {data} = await client.mutate({
            mutation:UPDATE_ADDRESS,
            variables:NewData
        })
        if(data?.updateAddress?.success === false){
            toast.error(data?.updateAddress?.message)
        }else toast.success('تم  تحديث العنوان بنجاح')
        return data?.updateAddress
    } catch (error) {
        toast.error('فشل في تحديث العنوان')
        console.error(error)
    }
})
//Delete Address
export const deleteAddress = createAsyncThunk('address/delete',async (id: string)=>{
    try {
        const {data} = await client.mutate({
            mutation: DELETE_ADDRESS,
            variables: {id}
            })
            if(data?.deleteAddress?.success === false){
                toast.error(data?.deleteAddress.message)
            }else if(data?.deleteAddress?.success === true){
                 toast.success('تم حذف العنوان بنجاح')
                 }
            return data?.deleteAddress
    }catch(error){
        toast.error('فشل في حذف العنوان')
    }

})