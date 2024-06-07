import { Grid } from '@mui/material'
import React from 'react'
import Paragraph from '../Paragraph';

const TknGrid = (props) => {   
     const {children} =  props;
  return (
    <Grid item  xs={12} lg={12}  padding="15px 0px" borderBottom={props.btm} borderTop={props.upr} sx={{ width:"100%",...props}}>  
            <Paragraph variant="h5" textAlign="left"  fontWeight="bold">{props.t1}</Paragraph> 
            <Paragraph variant="body1" textAlign="left"  fontWeight="bold" color="#707070">{props.subt}</Paragraph>  
            {children}
    </Grid>
  )
}

export default TknGrid