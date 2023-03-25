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
    <Box className="navStyle">
        <Box sx={{ flexGrow: 1}} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HilitoDisney
          </Typography>
          <Button sx={{color:"#FFACAC"}} onClick={()=>navigate("/about")}>About</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Box>
  )
}

export default Navbar


