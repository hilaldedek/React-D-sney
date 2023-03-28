import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import "./Navbar.scss";
import logo from "../../assets/disneyland.png";




const Navbar = () => {
  const navigate=useNavigate();

  return (
    <Box className="allNav">
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#FFACAC"}}>
        <Toolbar >
          <img src={logo} alt="logo" className='logo'/>
          <Typography variant='h3' component="div" sx={{ flexGrow: 1,color:"#fc7676",textDecoration:"none",fontFamily: 'Dancing Script'}}>
            Disney
          </Typography>
          <Button sx={{color:"#fc7676",fontSize:"1.2rem",fontFamily: 'Abril Fatface'}} onClick={()=>navigate("/about")} className='button'>About</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </Box>
  )
}

export default Navbar


