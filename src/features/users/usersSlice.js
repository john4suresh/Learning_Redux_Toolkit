import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = []

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
      const respone = await axios.get(USERS_URL);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  });

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;