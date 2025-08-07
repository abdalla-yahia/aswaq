'use client';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '@/libs/Apollo/ApolloClient';
import { GET_USER_BY_ID, GET_All_USERS } from "@/Graphql/Queries/UserQuery";


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

// Fetch User by ID
export const fetchUserById = createAsyncThunk('users/fetchuser',async (id)=>{
  try {
      const {data} = await client.query({query:GET_USER_BY_ID, variables:{id}});
      return data.GetUserById;
  } catch (error) {
    console.log('Error =>',error)
    return error;
  }
})