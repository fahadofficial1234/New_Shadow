import { Button, } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';


const StyledButton = styled(Button)`
text-transform: none;
color: white;
font-family: "PoppinsM";
width: fit-content;
min-width: 130px;
min-height: 35px;
border-radius: 5px;
font-size:14px;
padding:${(props) => (props.p ? props.p : "2px 10px")};
background: linear-gradient(110deg,#663CED 30%,#FFA5FD); 
&.Mui-disabled {
    color: #707070 !important;
    border-color: #707070 !important;
    background:  #979797 !important;
    cursor: not-allowed !important;
    z-index: 2;
  }
&:hover{
  background-color: #6b17ff;
  color: white;
}
@media(max-width: 599px){
        font-size: 16px;

    }
`


const PurpleButton = (props) => {
  return ( 
    <StyledButton  {...props} > {props.children} </StyledButton>
  );
}
 
export default PurpleButton;