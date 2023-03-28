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
      <img src={state?.imageUrl} alt="imagechar" className='divImg'/>
      <Box >
        <Typography variant='h2' sx={{textAlign:"center",fontFamily:"Abril Fatface",color:"#dbb8ff"}} className="charName">{state.name}</Typography>
      </Box>
      <Box sx={{marginTop: "1rem",
   display: "grid",
   placeItems: "center"}}>
{state.films.length>0 && (
      <Accordion sx={{width:"50%" , marginTop:"1rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" sx={{backgroundColor:"#ffacac92"}}
        >   
        <Typography variant='h5' sx={{fontFamily:"Abril Fatface",fontSize:"2rem",color:"#f99090"}}>Films:</Typography>
      
        </AccordionSummary>
        <AccordionDetails>
          {state?.films.map((film,index)=>(
        <Box key={index} className="divstyle" >
          <SlideshowIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}} />
          <Typography sx={{fontFamily:"Dosis",fontSize:"1.2rem"}}>{film}</Typography>
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
        <Typography variant='h5' sx={{fontFamily:"Abril Fatface",fontSize:"2rem",color:"#f99090"}}>Tv Shows:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {state?.tvShows.map((show,index)=>(
          <Box key={index} className="divstyle">
            <TvIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}} />
            <Typography sx={{fontFamily:"Dosis",fontSize:"1.2rem"}}>{show}</Typography>
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
          <Typography variant='h5' sx={{fontFamily:"Abril Fatface",fontSize:"2rem",color:"#f99090"}}>Video Games:</Typography>
        </AccordionSummary>
        <AccordionDetails >
          {state?.videoGames.map((game,index)=>(
        <Box key={index} className="divstyle">
          <VideogameAssetOutlinedIcon sx={{color:"#bb80fa",marginRight:"0.5rem"}}/>
          <Typography sx={{fontFamily:"Dosis",fontSize:"1.2rem"}}>{game}</Typography>
        </Box>
      ))}
        </AccordionDetails>
      </Accordion>
 )}</Box>         
    </Box>
  )
}

export default Details