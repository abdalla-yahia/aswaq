'use client';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '@/libs/Apollo/ApolloClient';
import { GET_USER_BY_ID, GET_All_USERS,CREATE_USER,LOGIN_USER } from "@/Graphql/Schemas/UserQuery";
import { FormState, LoginUser } from "@/types/types";
import { ApolloError } from "@apollo/client";


//Fetch All Users
export const fetchAllUsers = createAsyncThunk('users/fetchAll',async () => {
    try {
      const res = await client.query({ query: GET_All_USERS });
      return res.data.GetAllUsers;
    } catch (error ) {
      console.error('Apollo error:', error);
      return error;
    }
  }
);

//Fetch User by ID
export const fetchUserById = createAsyncThunk('users/fetchuser',async (id)=>{
  try {
      const {data} = await client.query({query:GET_USER_BY_ID, variables:{id}});
      return data.GetUserById;
  } catch (error) {
    console.log('Error =>',error)
    return error;
  }
})

//Create A New User
export const createUser = createAsyncThunk("users/create",async (user: FormState, { rejectWithValue }) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_USER,
        variables:  user ,
      });

      console.log(data);
      return data.CreateUser;
    } catch (err) {
      let message = "حدث خطأ أثناء إنشاء المستخدم";
      if (err instanceof ApolloError) {
        console.error("GraphQL Errors:", err.graphQLErrors);
        console.error("Network Error:", err.networkError);
        message = err.message;
      } else if (err instanceof Error) {
        console.error("Unexpected Error:", err);
        message = err.message;
      }

      return rejectWithValue(message);
    }
  }
);

//Login A Token User
export const loginUser = createAsyncThunk('users/login',async (user:LoginUser)=>{
  try {
    const {data} = await client.mutate({
      mutation:LOGIN_USER,
      variables:user
    })
    return data?.loginUser
  } catch (error) {
    console.log(error)
    return error
  }
})