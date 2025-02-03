import { use } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";



const Browse = () => {
  const showGptSearch=useSelector(store => store.gpt.toggleSearch)
 
  useNowPlayingMovies();
  usePopulerMovies();
  useTrendingMovies();
  useUpComingMovies();

  
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> :
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
      
      
    </div>


  )
}

export default Browse