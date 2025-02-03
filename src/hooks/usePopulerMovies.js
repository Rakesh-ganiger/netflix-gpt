import { useEffect } from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addPopulerMovies } from "../utils/movieSlice";


const usePopulerMovies = () => {
    const dispatch=useDispatch();

    const getMovies = async() => {
        const data= await fetch("https://api.themoviedb.org/3/movie/popular?&page=1", options)
        const json= await data.json();
        // console.log(json)
        dispatch(addPopulerMovies(json.results))

    }
    useEffect(()=>{
        getMovies();

    },[])
 
}

export default usePopulerMovies