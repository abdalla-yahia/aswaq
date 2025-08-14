'use client';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '@/libs/Apollo/ApolloClient';
import { GET_USER_BY_ID, GET_All_USERS,CREATE_USER,LOGIN_USER, DELETE_USER, UPDATE_USER } from "@/Graphql/Schemas/UserQuery";
import { FormState, LoginUser } from "@/types/types";
import { toast, ToastOptions } from "react-toastify";
import { ApolloError } from "@apollo/client";
import { UpdateUser } from "@/interfaces/usersInterface";

//Fetch All Users
export const fetchAllUsers = createAsyncThunk('users/fetchAll',async () => {
    try {
      const {data}= await client.query({ query: GET_All_USERS });
      return data.GetAllUsers;
    } catch (error ) {
    toast.error('Error =>',error as ToastOptions<unknown> | undefined)
    }
  }
);

//Fetch User by ID
export const fetchUserById = createAsyncThunk('users/fetchuser',async (id)=>{
  try {
      const {data} = await client.query({query:GET_USER_BY_ID, variables:{id}});
      return data.GetUserById;
  } catch (error) {
    toast.error('Error =>',error as ToastOptions<unknown> | undefined)
  }
})

//Create A New User
export const createUser = createAsyncThunk("users/create",async (user: FormState,thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_USER,
        variables:  user ,
      });
      console.log(data?.CreateUser)
      if(data?.CreateUser?.success === false){
        toast.error(data?.CreateUser?.message)
      }else toast.success('تم إنشاء المستخدم بنجاح')
      return data.CreateUser;
    } catch (err) {
  const message = err instanceof ApolloError
    ? err.message
    : `${err} فشل في انشاء المستخدم` ;
  
  toast.error(message);
  return thunkAPI.rejectWithValue(message);
}
  }
);

//Login A Token User
export const loginUser = createAsyncThunk('users/login',async (user:LoginUser,thunkAPI)=>{
  try {
    const {data} = await client.mutate({
      mutation:LOGIN_USER,
      variables:user
    })
    if(data?.loginUser?.success == false){
      toast.error(data?.loginUser?.message)
      }else toast.success('تم دخول المستخدم بنجاح')
    return data?.loginUser
  } catch (error) {
     const message = error instanceof ApolloError
    ? error.message
    : 'فشل في تسجيل الدخول ';
  
  toast.error(message);
  return thunkAPI.rejectWithValue(message);
  }
})

//Delete User
export const deleteUser = createAsyncThunk('users/delete',async (id:string,thunkAPI)=>{
  try {
        const {data}= await client.mutate({
          mutation:DELETE_USER,
          variables:{id}
        })

        if(data?.DeleteUser?.success == false){
          toast.error('فشل فى حذف المستخدم')
        }else toast.success('تم حذف المستخدم بنجاح')
        return data?.DeleteUser
  }catch(error){
      const message = error instanceof ApolloError
    ? error.message
    : 'فشل في حذف المستخدم !! ';
  
  toast.error(message);
  return thunkAPI.rejectWithValue(message);
  }
  
})

//Update User 
export const updateUser = createAsyncThunk('users/update',async (user:UpdateUser,thunkAPI)=>{
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_USER,
      variables: {
        id:user?.id,
        data: user?.data 
      }
      });
      if(data?.updateUser?.success == false){
        toast.error(data?.updateUser?.message)
        }else toast.success('تم تعديل المستخدم بنجاح')
        return data?.updateUser
        } catch (error) {
          const message = error instanceof ApolloError
          ? error?.message
          : 'فشل في تعديل المستخدم !! ';
          toast.error(message);
        return thunkAPI?.rejectWithValue(message);
  }
})