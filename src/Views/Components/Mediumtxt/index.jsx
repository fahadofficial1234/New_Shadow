import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
    @media(max-width: 1103px){
        /* font-size: 14px; */
    }
    @media(max-width: 1440px){
        /* font-size: 14px; */
    }

`

const Mediumtxt = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="h5" color="white" fontFamily="OpenSans" textAlign="left" fontWeight="normal" my={1} sx={{marginRight:{xs:"0px", md:"0px"}}} {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Mediumtxt;