import React from 'react'
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import Regtxt from '../../Regtxt';
import aws from '../../../../assets/Images/newDesign/aws.png'
import azure from '../../../../assets/Images/newDesign/azure.png'
import cloud from '../../../../assets/Images/newDesign/cloud.png'
import vultr from '../../../../assets/Images/newDesign/vultr.png'
import Paragraph from '../../Paragraph';
import { Img } from '../../../Styles/Maintext.styles';
import Mediumtxt from '../../Mediumtxt'; 
import {motion} from 'framer-motion'; 
import AOS from 'aos';
const  Contbg = styled(Box)` 
/* background-color:${(props) => props.bg ? props.bg: "transparent"}; */
min-height:  ${(props) => props.noht ? "auto" : "300px"} ;
display: flex; 
flex-direction: column; 
justify-content: start;
align-items: center;
width: 100%;
background: linear-gradient(to right,#090909,#000000);
border-radius: 10px; 
gap:70px; 
padding: 70px 0px;
 `  
   const BoxLay = styled(Box)`
   max-width: 100%; 
   min-height: auto; 
   display:flex; 
   flex-direction: row; 
   justify-content: start; 
   background-color: #161616;  
   padding: 30px  40px; 
   gap: 20px; 
   border-radius: 7px;
 ` 
 const Partners = (props) => { 

  return (
     <Box display='flex' flexDirection="column" justifyContent='start' alignItems='center' gap="10px" borderRadius="8px"> 
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",background:"#161616",padding:"20px",borderRadius:"8px"}} >
          <Img w={props.imgw? props.imgw:"80px"}  small_w={props.small_w} src={props.psrc} alt="pic"  />
        </Box>
         <Mediumtxt variant='body1' fontWeight="600" color="white" maxWidth="105px" textAlign="center">   
            {props.def1}
         </Mediumtxt>   
     </Box>
  )
} 

const MotionContainer = motion(Container)
const  PoweredBy = () => { 

  return (
    <Contbg  sx={{padding:{xs:"70px 0px",lg:"100px 0px"}}}>   
    {/* <MotionContainer initial={{y:"30%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}}  sx={{maxWidth:"xl"}}>    */} 
    <Container data-aos="fade-up" sx={{maxWidth:"xl",position:"relative",zIndex:"500"}}> 
    <Paragraph variant="h4" mb="40px" fontSize={{xs:"18px", lg:"30px"}}>Powered By</Paragraph>
        <Grid container padding={{xs:"0px",lg:"0 10px"}} display='flex' flexWrap="wrap" justifyContent='center' gap={{xs:"30px 30px !important", lg:"30px 70px !important"}}>
          <Partners psrc={aws}  def1="Amazon Web Service" imgw="90px" small_w="77px !important"  />
          <Partners psrc={azure}  def1="Microsoft Azure" imgw="90px" small_w="77px"  />
          <Partners psrc={cloud}  def1="Google Cloud" imgw="110px"  small_w="82px" />
          <Partners psrc={vultr}  def1="Vultr Servers" imgw="100px" small_w="75px" />
        </Grid>
    </Container>
    {/* </MotionContainer> */}
    </Contbg>
  )
}

export default  PoweredBy