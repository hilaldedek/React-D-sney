import { Box } from '@mui/material';
import React from 'react'

const Photo = (data) => {
    console.log("ne geldi", data);
    const {image} = data;
  return (
    <Box>
        <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>

    <ImageListItem>
      <img
        src={`${item.image}?w=161&fit=crop&auto=format`}
        srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt="photolist"
        loading="lazy"
      />
    </ImageListItem>
</ImageList>
    </Box>
  )
}

export default Photo
