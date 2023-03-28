import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import defaultimage from "../../assets/default.png";
import "./Card.scss";

const Card = ({char}) => {
    const navigate=useNavigate();
  return (
    <Box className="allStyle" sx={{display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"}}>
        {char?.map((karakter,index)=>{
            return(
                <Box key={index} className="cardstyle" sx={{border:"2px solid #cacacad3",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:"#dfc0ff",display: "flex",
                flexDirection: "column",
                margin:"1rem 1rem",
                padding: "0.5rem", width:"20rem",height:"auto"}}>
                    <img src={karakter?.imageUrl
 || defaultimage} alt="img"className='imgStyle'/>
                    <Typography variant="h4" sx={{textAlign:"center",fontFamily:"Abril Fatface",marginTop:"0.7rem",marginBottom:"0.7rem",color:"#c083fe",fontSize:"2rem"}}>{karakter?.name}</Typography>
                    <Button variant="contained" className="detailButton" sx={{backgroundColor: "#FFACAC",width: "5rem",display: "block",margin: "auto"}} onClick={()=>navigate("/detail",{state:karakter,replace:false})} >View Detail</Button>
                </Box>

            )
        })}
    </Box>
  )
}

export default Card