import React from 'react'
import { useLocation} from 'react-router';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TvIcon from '@mui/icons-material/Tv';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import "./Detail.scss";
import { Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Details = () => {
  const {state}=useLocation();
  console.log("state geldi mi?: ",state);
  return (
    <Box>
      <img src={state.imageUrl} alt="imagechar" className='divImg'/>
      <Box >
        <Typography variant='h2' sx={{textAlign:"center"}} className="charName">{state.name}</Typography>
      </Box>
      <Box className="accordion">
{state.films.length>0 && (
      <Accordion sx={{width:"50%" , marginTop:"1rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" sx={{backgroundColor:"#ffacac92"}}
        >   
        <Typography variant='h5' className='header'>Films:</Typography>
      
        </AccordionSummary>
        <AccordionDetails>
          {state?.films.map((film,index)=>(
        <Box key={index} className="divstyle">
          <SlideshowIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}} />
          <Typography className='detailFont'>{film}</Typography>
        </Box>
      ))}
        </AccordionDetails>
      </Accordion>)}

      {state.tvShows.length>0 && (
      <Accordion sx={{width:"50%", marginTop:"1rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" sx={{backgroundColor:"#ffacac92"}}
        >
        <Typography variant='h5' className='header' >Tv Shows:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {state?.tvShows.map((show,index)=>(
          <Box key={index} className="divstyle">
            <TvIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}} />
            <Typography className='detailFont'>{show}</Typography>
          </Box>
      ))}
        </AccordionDetails>
      </Accordion>
)}
{state.videoGames.length>0 && (
<Accordion sx={{width:"50%", marginTop:"1rem",marginBottom:"1rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" sx={{backgroundColor:"#ffacac92"}}
        >
          <Typography variant='h5' className='header'>Video Games:</Typography>
        </AccordionSummary>
        <AccordionDetails >
          {state?.videoGames.map((game,index)=>(
        <Box key={index} className="divstyle">
          <VideogameAssetOutlinedIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}}/>
          <Typography className='detailFont'>{game}</Typography>
        </Box>
      ))}
        </AccordionDetails>
      </Accordion>
 )}</Box>         
    </Box>
  )
}

export default Details