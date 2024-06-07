import React from 'react'; 
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Maintxt from '../Maintxt';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';
import { Img } from '../../Styles/Maintext.styles';


const CardSell = (props) => {
      
  const BoxLay = styled(Box)`
    max-width: 100%; 
    min-height: auto; 
    display:flex; 
    flex-direction: column; 
    justify-content: start; 
    background-color: #161616;  
    padding: 30px  40px; 
    gap: 20px; 
    border-radius: 7px;
  ` 
  const p =  props.padding ?  props.padding : '0px';
  return ( 
     <BoxLay padding={props.cardpading}> 
         <Box display='flex' justifyContent='start' alignItems='center' gap="15px"> 
         <Img w={props.imgw? props.imgw:"70px"}  src={props.psrc} alt="pic" style={{padding:`${p}`}} />
         <Mediumtxt variant='h5' fontWeight="400" color="#7F59FD">   
            {props.def1}
         </Mediumtxt>   
         </Box>
         <Paragraph variant="body1" lineHeight="1.5" fontWeight='400' maxWidth='100%' paddingBottom="30px"> 
             {props.def2} 
        </Paragraph>
     </BoxLay>
  )
}

export default CardSell;