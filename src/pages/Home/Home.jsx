import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import Card from '../../components/Card/Card';
import "./Home.scss";


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
            <TextField id="outlined-basic" label="Enter an item" variant="outlined" onChange={(e) => setVeri(e.target.value)} />
            <Button variant="contained" className='button' sx={{backgroundColor:"#FFACAC"}} onClick={handleSubmit} >Search</Button>
        </Box>
        
        {/* {!char && (
           <Box>
            <h1>char yok</h1>
           </Box>
        )}
        {char?.length === 0 && (
            <Box>
                <h1>bir şey girmediniz</h1>
            </Box>
        )} */}
        {char?.length > 0 && <Card char={char}/>}
    </Box>
  )
}

export default Home;