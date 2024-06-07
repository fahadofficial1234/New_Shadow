import { Grid,Button } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';


const StyledButton = styled(Button)`
text-transform: none;
background-color: transparent;
color: white;
font-weight: normal;
font-family: PopM;
min-width: 150px;
border-width: 2px;
border-style: solid;
border-color: white;
border-radius: 5px;
font-size:18px;
margin-top: 10px;
&:hover{
      color: black;
      background-color: ${(props) => props.hvclr ? props.hvclr : "white"};
      border-color: ${(props) => props.hvclr ? props.hvclr : "white"};
}

@media(max-width: 1440px){
   margin-top: 0px;
}

`

const Buttontrans = (props) => {
    return (
            <StyledButton {...props}>{props.children}</StyledButton>
      );
}
 
export default Buttontrans;