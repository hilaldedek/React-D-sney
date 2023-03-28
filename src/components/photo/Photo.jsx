import { Box, ImageListItem } from '@mui/material';
import React from 'react';


const Photo = (data) => {
    console.log("ne geldi", data);
    const {image} = data;
  return (
    <Box >

    <ImageListItem >
      <img
        src={`${image}?w=161&fit=crop&auto=format`}
        srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt="photolist"
        loading="lazy"
      />
    </ImageListItem>

    </Box>
  )
}

export default Photo
