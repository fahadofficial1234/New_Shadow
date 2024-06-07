import React from 'react';
import { Blackbg, Img } from '../../../Styles/Maintext.styles';
import { Box, Typography } from '@mui/material';
import MainIcon from "../../../../assets/Images/MainIcon.png";
import styled from '@emotion/styled';
const LoadImg = styled.img`
width:${(props) => props.w ? props.w : "100%"};
height: ${(props) => props.h ? props.h : "auto"};
padding-top: ${(props) => props.ptop ? props.ptop : "0px"};
@media(max-width: 600px) {
    width:15%;
}
@media(min-width:601px) and (max-width: 900px){
    width:7%;
}
`
const Loader = () => {
    return (
        <Blackbg>
            <Box gap={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh" sx={{animation:"Blink 4s ease infinite"}}>
                <LoadImg w="4%" src={MainIcon} />
                <Typography variant="h4" color="white" fontFamily="OpenSans">Mob<Typography variant="h4" component="span" fontFamily="OpenSans">ETH</Typography></Typography>
            </Box>
        </Blackbg>
      );
}
 
export default Loader;