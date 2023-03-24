import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TvIcon from '@mui/icons-material/Tv';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import "./Detail.scss";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Button } from '@mui/material';

const Details = () => {
  const {state}=useLocation();
  console.log("state geldi mi?: ",state);
  return (
    <div>
      <img src={state.imageUrl} alt="" className='div' />
      <div>
        <h1>{state.name}</h1>
      </div>
      {state.films.length>0 && (
        <h3>Films:</h3>
      )}
      {state?.films.map((film,index)=>(
        <div className='divstyle' key={index}>
          <SlideshowIcon/>
          <p>{film}</p>
        </div>
      ))}
      {state.tvShows.length>0 && (
        <h3>Tv Shows:</h3>
      )}
      {state?.tvShows.map((show,index)=>(
          <div className='divstyle' key={index}>
            <TvIcon/>
            <p>{show}</p>
          </div>
      ))}
      {state.videoGames.length>0 && (
        <h3>Video Games:</h3>
      )}
      {state?.videoGames.map((game,index)=>(
        <div className='divstyle' key={index}>
          <VideogameAssetOutlinedIcon/>
          <p>{game}</p>
        </div>
      ))}
      
      
    </div>
  )
}

export default Details