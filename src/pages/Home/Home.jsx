import { Box, Button,ImageList,TextField} from '@mui/material';
import React, { useState } from 'react'
import Card from '../../components/Card/Card';
import "./Home.scss";
import {data} from "../../helper/data";
import Photo from '../../components/photo/Photo';
import 'react-toastify/dist/ReactToastify.css';


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
        <Box className="search" sx={{margin: "5rem auto",
    display: "flex",
    flexDirection: "column",
    width: "15rem",
    position: "relative"}} >
            <TextField id="outlined-basic"label="Enter an item" variant="outlined" onChange={(e) => setVeri(e.target.value)} />
            <Button variant="contained" className='button' sx={{backgroundColor:"#FFACAC"
    ,fontSize:"1.1rem",fontFamily: 'Abril Fatface',marginTop: "0.5rem"}} onClick={handleSubmit} >Search</Button>
        </Box>
        
        
        {(!char || char?.length===0) && (
           <Box sx={{display:"block",margin:"auto"}}>
            <ImageList sx={{ width: "auto", height: "auto"}} variant="woven" cols={3} gap={8}>
            {data.map((item,index)=><Photo {...item} key={index}/>)}
</ImageList>
           </Box>
        )}
        {char?.length > 0 && <Card char={char}/>}
    </Box>
  )
}

export default Home;