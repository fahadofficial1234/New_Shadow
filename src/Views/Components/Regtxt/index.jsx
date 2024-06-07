import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
    @media(max-width: 599px){
        font-size: ${(props)=>props.fs599 };
    }
`

const Regtxt = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="h3" color="white" fontFamily="OpenSans"  textAlign="left" fontWeight="light" my={2} sx={{marginRight:{xs:"0px", md:"10px"},lineHeight:"1.3"}} {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Regtxt;