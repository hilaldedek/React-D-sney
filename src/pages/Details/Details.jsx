import React from 'react'
import { useLocation} from 'react-router';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TvIcon from '@mui/icons-material/Tv';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import "./Detail.scss";
import { Box, Typography } from '@mui/material';


const Details = () => {
  const {state}=useLocation();
  console.log("state geldi mi?: ",state);
  return (
    <Box>
      <img src={state.imageUrl} alt="imagechar" className='divImg'/>
      <Box >
        <Typography variant='h2' sx={{textAlign:"center"}}>{state.name}</Typography>
      </Box>
      {state.films.length>0 && (
        <Typography variant='h5'>Films:</Typography>
      )}
      {state?.films.map((film,index)=>(
        <Box key={index}>
          <Typography><SlideshowIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}}/>{film}</Typography>
        </Box>
      ))}
      {state.tvShows.length>0 && (
        <Typography variant='h5'>Tv Shows:</Typography>
      )}
      {state?.tvShows.map((show,index)=>(
          <Box key={index}>
            <Typography><TvIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}}/>{show}</Typography>
          </Box>
      ))}
      {state.videoGames.length>0 && (
        <Typography variant='h5'>Video Games:</Typography>
      )}
      {state?.videoGames.map((game,index)=>(
        <Box key={index}>
          <Typography><VideogameAssetOutlinedIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}}/>{game}</Typography>
        </Box>
      ))}
      
      
    </Box>
  )
}

export default Details