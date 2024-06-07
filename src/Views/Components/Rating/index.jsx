import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const TextRating = (props)=> {
    const {value, setValue} =props

  return (
    
      <Rating
      sx={{color:"#7e52f8"}}
        value={value}
        precision={1}
        emptyIcon={<StarIcon style={{ opacity: 1 ,color:"#5f5f5f"}} fontSize="inherit" />}
        onChange={(event, newValue) => {
            setValue(newValue);
          }}
          {...props}
      />
  );
}
export default  TextRating