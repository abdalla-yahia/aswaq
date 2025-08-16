/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  fetchAllUsers,
  fetchUserById,
  createUser,
  loginUser,
  deleteUser,
  updateUser,
  changeUserPassword,
} from "@/Features/Actions/usersActions";
import { FormState, PasswordState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {} as { user: FormState },
  password:{} as {success: boolean,message:string},
  loading: false as boolean,
  error: null as string | null,
};

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action?.payload;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        (state.loading = false), (state.error = null);
      })
      .addCase(fetchUserById.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload;
      })
      .addCase(fetchUserById.rejected, (state) => {
        (state.loading = false), (state.error = null);
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.user = action.payload), (state.loading = false);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(changeUserPassword.pending , state=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUserPassword.fulfilled , (state,action)=>{
        state.loading = false;
        state.password = action.payload;
      })
      .addCase(changeUserPassword.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload as string
      })
  },
});

export default usersSlice.reducer;
