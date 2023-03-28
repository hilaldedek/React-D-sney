import { Box, ImageList, ImageListItem } from '@mui/material';
import React from 'react';


const Photo = (data) => {
    console.log("ne geldi", data);
    const {image} = data;
  return (
    <Box >
        <ImageList sx={{ width: 900, height: 450 }} variant="woven" cols={3} gap={8}>

    <ImageListItem sx={{display:"flex",flexWrap:"wrap"}}>
      <img
        src={`${image}?w=161&fit=crop&auto=format`}
        srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt="photolist"
        loading="lazy"
      />
    </ImageListItem>
</ImageList>
    </Box>
  )
}

export default Photo
