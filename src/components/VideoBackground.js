
import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  
  const trailerVideo= useSelector(store=> store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video mt-0 top-[-10]'
        src={"https://www.youtube.com/embed/" +
             trailerVideo?.key +
             "?&autoplay=1&mute=1"
          }
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;


