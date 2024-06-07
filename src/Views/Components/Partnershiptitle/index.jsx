import { Box } from '@mui/material'
import React from 'react'
import Mediumtxt from '../Mediumtxt' 
import { Img } from '../../Styles/Maintext.styles';

const Partners = (props) => { 


  return (
     <Box display='flex' flexDirection="column" justifyContent='start' alignItems='center' gap="10px"> 
         <Img w={props.imgw? props.imgw:"80px"}  src={props.psrc} alt="pic" style={{}} />
         <Mediumtxt variant='body1' fontWeight="600" color="white" maxWidth="105px" textAlign="center">   
            {props.def1}
         </Mediumtxt>   
     </Box>
  )
}

export default Partners