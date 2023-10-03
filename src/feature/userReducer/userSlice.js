import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk("users/getAsyncUsers",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        //pending
        [getAsyncUsers.pending]: (state, action) => {
            state.loading = true;
            state.data = [];
            state.error = "";
        },
        //success=>fullfiles
        [getAsyncUsers.fulfilled]: (state, action) => {

            state.data = action.payload;
            state.loading = false;
        },
        //reject
        [getAsyncUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.data = []
        },

    }
})
//)

// export const { } = usersSlice.actions;
export default usersSlice.reducer;