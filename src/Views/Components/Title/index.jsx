import React from 'react' 
import styled from '@emotion/styled'; 
import { Box, Typography } from '@mui/material';
import Paragraph from '../Paragraph';
 
const Flex =  styled(Box)`
    display: flex; 
    flex-direction: row;  
    gap:10px;
    /* max-width: 300px; */
` 

const Maintitle = (props) => { 
   

  return (
    <Flex>  
      <Paragraph  fontWeight="600">  
      {props.h1txt}
      </Paragraph> 
      <Paragraph textTransform={props.txtrans} fontWeight={props.fntw} color={props.clrsub ? props.clrsub : "white"} > 
      {props.subtxt}
      </Paragraph>
    </Flex>
  )
}

export default Maintitle