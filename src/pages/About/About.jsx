import { Box, Link, Typography,Button } from '@mui/material';
import React from 'react';
import developer from "../../assets/programmer.png";
import "./About.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const About = () => {
  return (
    <Box>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5rem"}}>
        <img src={developer} alt='developer' className='dev'/>
      <Typography className='coded'>
        Coded by Hilal Dedek
      </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"2rem"}}>
        <Button variant="contained" className='buttons' sx={{backgroundColor:"#e8d3ff" ,margin:"1rem"}}><LinkedInIcon sx={{color:"#c695fc",marginRight:"0.5rem"}}/><Link href='https://www.linkedin.com/in/hil%C3%A2ldedek/' target={'_blank'} sx={{ color:"#b570ff",textDecoration:"none"}}>Linkedin</Link></Button>
      <Button variant="contained" className='buttons' sx={{backgroundColor:"#e8d3ff"}}><GitHubIcon sx={{color:"#c695fc",marginRight:"0.5rem"}}/><Link href='https://github.com/hilaldedek' target={'_blank'} sx={{ color:"#b570ff",textDecoration:"none"}}>Github</Link></Button>
      </Box>
      
      
      
    </Box>
  )
}

export default About