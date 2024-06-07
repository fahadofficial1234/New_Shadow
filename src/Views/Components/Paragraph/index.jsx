import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
    @media(max-width: 425px){
        /* font-size: 14px; */
    }
`

const Paragraph = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="body2" color="white" fontFamily="PoppinsL" textAlign="center"    {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Paragraph;