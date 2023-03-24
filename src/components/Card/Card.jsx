import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import defaultimage from "../../assets/default.png"

const Card = ({char}) => {
    const navigate=useNavigate();
  return (
    <div>
        {char?.map((karakter,index)=>{
            return(
                <div key={index}>
                    <img src={karakter?.imageUrl
 || defaultimage}/>
                    <h1>{karakter?.name}</h1>
                    <Button variant="contained" color="success" onClick={()=>navigate("/detail",{state:karakter,replace:false})} >View Detail</Button>
                </div>

            )
        })}
    </div>
  )
}

export default Card