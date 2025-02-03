import { use } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpComingMovies from "../hooks/useUpComingMovies";



const Browse = () => {
 
  useNowPlayingMovies();
  usePopulerMovies();
  useTrendingMovies();
  useUpComingMovies();

  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>


  )
}

export default Browse