import { Box, Grid } from '@mui/material';
import React from 'react';
import { Img } from '../../Styles/Maintext.styles';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';

const   Cardimg = (props) => {
    return (
        <Grid item xs={12} sm={5} md={3.5} display="flex"  sx={{paddingTop:{xs:"0px", md:props.ptop}}} flexDirection="column" position="relative" borderRadius="10px" bgcolor={props.bg? props.bg: "#161616"} minHeight="430px" {...props}>
            <Img  src={props.psrc} alt="pic" paddingLeft="20px !important" />
            <Box display="flex"  flexDirection="column" padding={props.padd ? props.padd:"20px"}>
            <Mediumtxt >{props.def1}</Mediumtxt>
            <Paragraph my="0px">{props.def2}</Paragraph>   
            </Box>
 
        </Grid>
      );
}
 
export default Cardimg;