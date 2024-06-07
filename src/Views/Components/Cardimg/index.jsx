import { Box, Grid } from '@mui/material';
import React from 'react';
import { Img } from '../../Styles/Maintext.styles';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';

const   Cardimg = (props) => {
    return (
        <Grid item xs={12} sm={4.5} md={3.5} display="flex"  sx={{paddingTop:{xs:"0px", md:props.ptop}}} flexDirection="column" alignItems={{xs:"center",lg:"start"}} justifyContent={{xs:"center",lg:"start"}} position="relative" borderRadius="10px" minHeight={{xs:"370px",lg:"500pxs"}} paddingBottom="10px "  {...props}>
            <Img w={props.w} small_w={props.small_Width} src={props.psrc} alt="pic" paddingLeft="" />
            <Box display="flex"  flexDirection="column" padding={props.padd ? props.padd:"20px"}>
            <Paragraph sx={{marginBottom:"20px"}} variant="h4" fontSize={{xs:"22px",lg:"32px"}}  textAlign={{xs:"center",lg:"left"}} >{props.def1}</Paragraph>
            <Paragraph  textAlign={{xs:"center",lg:"left"}}>{props.def2}</Paragraph>   
            </Box>
 
        </Grid>
      );
}
 
export default Cardimg;