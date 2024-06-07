import React from 'react'
import styled from '@emotion/styled'; 
import Paragraph from '../Paragraph';
import { Box } from '@mui/material';

const BoxCard =  styled(Box)`
      background-color: rgba(54,51,66,0.28);  
      border-radius: 8px;  
      display : flex; 
      flex-direction:column; 
      justify-content: center;  
      align-items: center; 
      gap:10px;
`
const  ColoredBox = (props) => { 
    
  return (  
     <BoxCard  maxWidth="150px" sx={{...props}}> 
       <Paragraph variant="h2" fontWieght="bold"  color={props.clor}>  
        {props.title1}
       </Paragraph> 
       <Paragraph variant="body2" textAlign="left !important" fontSize="14px" color={props.clor} fontWeight="bold" >  
        {props.subtitle}
       </Paragraph>
    </BoxCard>
  ) 
}

export default  ColoredBox