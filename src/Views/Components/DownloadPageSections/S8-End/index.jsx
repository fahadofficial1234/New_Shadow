import React from 'react';
import { Blackbg, Blackdiv, BlackText, Purplediv, StyledContainer } from '../../../Styles/Maintext.styles';
import { Grid ,Container,Box,Link, Typography} from '@mui/material';

//import Marquee from "react-fast-marquee";
import { BlackBox, StyledTypographyText, MidsectionBlack } from '../../../Styles/Maintext.styles';

const End = () => {
    return (
        <Purplediv nobrdr pd="10px">
            <Typography variant="caption" color="white" textAlign="center" fontFamily="OpenSans">
                © MobETH Bot Copyright 2023. All Rights Reserved
            </Typography>
        </Purplediv>
    );
}
 
export default End;