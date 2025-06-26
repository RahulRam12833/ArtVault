import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INTIAL_STATE = {
    categories:[]
}

export const categoriesSlice=createSlice({
    name:'categories',
    initialState:CATEGORIES_INTIAL_STATE,
    reducers:{
        setCategories(state,action){
            state.categories=action.payload;
        }
    }
})

export const {setCategories}=categoriesSlice.actions;
export const categoriesReducer=categoriesSlice.reducer;
