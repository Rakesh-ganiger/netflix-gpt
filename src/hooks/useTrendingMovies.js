import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";


const useTrendingMovies = () => {
    const dispatch= useDispatch();

    const getMovies = async () =>{
        const data= await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", options)
        const json= await data.json();
        console.log(json.results)
        dispatch(addTrendingMovies(json.results))
            
    }

    useEffect(()=>{
        getMovies();
    },[])

}

export default useTrendingMovies;