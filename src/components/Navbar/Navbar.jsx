import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import "./Navbar.scss";



const Navbar = () => {
  const navigate=useNavigate();

  return (
    <Box className="allNav">
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#FFACAC"}}>
        <Toolbar >
          <Typography variant="h3" component="div" sx={{ flexGrow: 1}} className='font'>
            Disney
          </Typography>
          <Button sx={{color:"#e6f7ff",fontSize:"1.2rem"}} onClick={()=>navigate("/about")} className='button'>About</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Box>
  )
}

export default Navbar


