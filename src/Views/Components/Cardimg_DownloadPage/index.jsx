import { Box, Grid } from '@mui/material';
import React from 'react';
import { Img } from '../../Styles/Maintext.styles';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';

const   CardimgD = (props) => { 
    const p =  props.padding ?  props.padding : '40px 0px 0px 30px'; 
    const imgh =  props.imgheight; 
     

    return (
        <Box width="100%"  display="flex"  sx={{paddingTop:{xs:"0px", md:props.ptop},background:props.background}} flexDirection="column" justifyContent='start' alignitems="center" position="relative" borderRadius="10px" bgcolor={props.bg? props.bg: "#161616"} minHeight={props.cardHeight ? props.cardHeight :"450px"} {...props}>
            <Img w={props.w? props.w:"70px"}   src={props.psrc} alt="pic" style={{padding:`${p}` ,height:`${imgh}`,objectFit:`${props.obj}`}} />
            <Box display="flex"  flexDirection="column" gap={props.bgap ? props.bgap:"5px"} padding={props.padd ? props.padd:"20px 30px"}>
                <Mediumtxt color="#7F59FD" fontSize={props.mtxt} fontFamily={props.fontfamilytitle }  fontWeight="500" >{props.def1}</Mediumtxt>
                <Paragraph variant="body1" fontSize={props.ptxt} fontFamily={props.fontfamilytext}  fontWeight="lighter" my="0px" paddingBottom="50px">{props.def2}</Paragraph>   
            </Box>
        </Box>
      );
}
 
export default CardimgD;    

