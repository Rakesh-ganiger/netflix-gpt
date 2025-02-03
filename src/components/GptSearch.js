import React from 'react'
import GptSearchInput from './GptSearchInput'
import GptMovieSuggestion from './GptMovieSuggestion'
import { background } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10">
              <img
                src={background}
                alt="logo"
              />
              </div>
      <GptSearchInput/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch