import { GET_ALL_ADDRESSES } from "@/Graphql/Schemas/AddressQuery";
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