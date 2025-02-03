import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        populerMovies:null,
        trendingMovies:null,
        upComingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies :(state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopulerMovies :(state, action)=>{
            state.populerMovies= action.payload;

        },
        addTrendingMovies :(state, action) =>{
            state.trendingMovies= action.payload;
        },
        addUpComingMovies :(state, action) => {
            state.upComingMovies= action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo= action.payload;

        }
    }
})


export const {addNowPlayingMovies,addPopulerMovies,addTrendingMovies,addUpComingMovies, addTrailerVideo} =movieSlice.actions;

export default movieSlice.reducer;