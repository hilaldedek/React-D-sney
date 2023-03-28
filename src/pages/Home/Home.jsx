import { Box, Button,TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Card from '../../components/Card/Card';
import "./Home.scss";
import {data} from "../../helper/data";
import Photo from '../../components/photo/Photo';


const Home = () => {

    const[veri,setVeri]=useState("");
    const[char,setChar]=useState("");

 
    const handleSubmit=(e)=>{
        e.preventDefault();
        getCharacters();
     
    }
   
    const getCharacters = async function(){
        const url=`https://api.disneyapi.dev/character?name=${veri}`;
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`Something went wrong => ${res.status}`);
            }
            const data = await res.json();
            setChar(data.data);
        }catch(error){
            console.log(error);
        }  
    } 
console.log(veri);
console.log(char);
  return (
    <Box className="all">
        <Box className="search">
            <TextField className='input' id="outlined-basic" label="Enter an item" variant="outlined" onChange={(e) => setVeri(e.target.value)} />
            <Button variant="contained" className='button' sx={{backgroundColor:"#FFACAC"
    ,fontSize:"1.1rem"}} onClick={handleSubmit} >Search</Button>
        </Box>
        
        {!char && (
           <Box>
            {data.map((item,index)=><Photo {...item} key={index}/>)}
           </Box>
        )}
        {char?.length === 0 && (
            <Box>
                <Typography sx={{textAlign:"center",fontSize:"2rem",fontFamily:"Dancing Script",color:"#954343"}}>...Character not found...</Typography>
            </Box>
        )}
        {char?.length > 0 && <Card char={char}/>}
    </Box>
  )
}

export default Home;