import React from 'react'
import styled from '@emotion/styled'
import Maintitle from '../Title'
import { Box } from '@mui/material'
 
const Flex = styled(Box)`
    display: flex;
    background: ${(props) => props.bg ? props.bg :'linear-gradient(to right,rgba(9, 9, 9, 0.33),rgba(0, 0, 0, 0.33))'};
    backdrop-filter:blur(10px);   
    padding: 10px 10px; 
    border-radius: ${(props) => props.br ? props.br : '0px'}; 
    width : ${(props) => props.w ? props.w : '100%'};  
    position: relative; 
    z-index: 999;
`
const UperBar = (props) => { 


  return ( 
    <Flex sx={{flexDirection:{xs:'row',sm:"row", lg:'row'}, gap:{xs:'10px',sm:'20px', lg:'50px'} ,justifyContent:{xs:"center",sm:"center",lg:'center'},alignItems:{xs:'center'}}} {...props}>
        <Maintitle h1txt="Your IP:"  subtxt={props?.IP } /> 
        <Box display={{xs:"none",md:"flex",lg:"flex"}}  gap={{xs:'10px',sm:'20px', lg:'50px'}}>  
        <Maintitle h1txt="Location:" subtxt={props?.location}  />  
        <Maintitle  h1txt="ISP:"  subtxt={props?.ISP}  />  
        </Box> 
        <Maintitle  h1txt="Status:"  subtxt="Unprotected" clrsub="#FF2A2A "  /> 
    </Flex>
    
  )
}

export default UperBar