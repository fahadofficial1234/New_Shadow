import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
    @media(max-width: 425px){
        /* font-size: 49px; */
    }
`

const Maintxt = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="h4" color="white" fontFamily="OpenSans"  textAlign="left" fontWeight="normal" my={1} sx={{marginRight:{xs:"0px", md:"10px"}}} {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Maintxt;