import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Card from '../../components/Card/Card';
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
    <div>
        <div >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setVeri(e.target.value)}/>
            <Button variant="contained" color="success" onClick={handleSubmit} >Search</Button>
        </div>
        
        {!char && (
           <div>
            <h1>char yok</h1>
           </div>
        )}
        {char?.length === 0 && (
            <div>
                <h1>bir şey girmediniz</h1>
            </div>
        )}
        {char?.length > 0 && <Card char={char}/>}
    </div>
  )
}

export default Home;