import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesandDocs } from "../../utilities/firebase/firebase.utils";

export const CATEGORIES_INTIAL_STATE = {
    categories: [],
    status: 'idle',
    error: null,
}


export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    return await getCategoriesandDocs(); 
  }
);


export const categoriesSlice=createSlice({
    name:'categories',
    initialState:CATEGORIES_INTIAL_STATE,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categories = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
})


export const categoriesReducer=categoriesSlice.reducer;
