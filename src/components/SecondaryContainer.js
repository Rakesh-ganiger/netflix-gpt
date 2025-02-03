import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies= useSelector(store => store.movies)
  return ( 
    movies && (
    <div className=' bg-black'>
        <div className='-mt-60 pl-6 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
        
        <MovieList title={"Trending"} movies={movies.trendingMovies}/>
        <MovieList title={"Populer"} movies={movies.populerMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
        </div>
    </div>
  )
)
}

export default SecondaryContainer


