import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:"gpt",
    initialState:{
        toggleSearch : false,
    },
    reducers:{
        addToggleSearchView: (state) =>{
            state.toggleSearch = !state.toggleSearch;
        }
    }

})


export const {addToggleSearchView} =gptSlice.actions;

export default gptSlice.reducer;