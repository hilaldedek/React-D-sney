import { Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import defaultimage from "../../assets/default.png";
import "./Card.scss";

const Card = ({char}) => {
    const navigate=useNavigate();
  return (
    <Box className="allStyle">
        {char?.map((karakter,index)=>{
            return(
                <Box key={index} className="cardstyle" sx={{border:"2px solid #cacacad3",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <img src={karakter?.imageUrl
 || defaultimage} alt="img" className='imgStyle'/>
                    <h1 className='name'>{karakter?.name}</h1>
                    <Button variant="contained" className="detailButton "onClick={()=>navigate("/detail",{state:karakter,replace:false})} >View Detail</Button>
                </Box>

            )
        })}
    </Box>
  )
}

export default Card