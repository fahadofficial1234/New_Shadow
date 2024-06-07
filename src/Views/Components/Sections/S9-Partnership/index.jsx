import React from 'react'
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import Regtxt from '../../Regtxt';
import paalai from '../../../../assets/Images/newDesign/PaalAI.png'
import SectBot from '../../../../assets/Images/newDesign/SectBot.png'
import Neonai from '../../../../assets/Images/newDesign/Neonai.png'
import Xtrack from '../../../../assets/Images/newDesign/Xtrack.png'
import Toadswap from '../../../../assets/Images/newDesign/Toadswap.png'
// import AWS from '../../../../assets/Images/newDesign/AWS Logo.png'
import otsea from '../../../../assets/Images/newDesign/otsea.png'
import tatsu from '../../../../assets/Images/newDesign/tatsu.png'
import Bank from '../../../../assets/Images/newDesign/Bank AI.png'
import CLS from '../../../../assets/Images/newDesign/CLS.png'
import Defender from '../../../../assets/Images/newDesign/Defender Bot.png'
import zkHive from '../../../../assets/Images/newDesign/zkHive.png'
import Resistor from '../../../../assets/Images/newDesign/Resistor Ai.png'
import Spectre from '../../../../assets/Images/newDesign/Spectre AI.png'
import Partners from '../../Partnershiptitle';
import Paragraph from '../../Paragraph';
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
const  Partnership = () => { 

  return (
    <Contbg>   
    <Container maxWidth="lg" data-aos="fade-up" sx={{position:"relative",zIndex:"500",padding:{xs:"35px 30px "}}}>   
         <Paragraph variant="h4" fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" mb="40px" >Our Partners</Paragraph>
        <Grid container padding="0 10px" display='flex' flexWrap="wrap" justifyContent='center' gap="30px 70px">
         <Partners psrc={paalai}  def1="Paal AI"  /> 
         <Partners psrc={SectBot}  def1="Sect Bot"  />
         <Partners psrc={Neonai}   def1="Neon AI" imgw="90px"  /> 
         <Partners psrc={Xtrack}  def1="Xtrack" imgw="90px"  />
         {/* <Partners psrc={AWS}  def1="Amazon Web Services" imgw="80px"  /> */}
         <Partners psrc={Resistor}  def1="Resistor Ai" imgw="65px"  />
         <Partners psrc={otsea}  def1="OTSea" imgw="70px"  />
         <Partners psrc={Toadswap}  def1="Toadswap" imgw="83px"  />
         {/* <Partners psrc={Toadswap}  def1="Toadswap" imgw="83px"  /> */}
         <Partners psrc={zkHive}  def1="zkHive" imgw="70px"  />
         <Partners psrc={CLS}  def1="CLS" imgw="85px"  />
         <Partners psrc={Spectre}  def1="Spectre AI" imgw="62px"  />
         <Partners psrc={Bank}  def1="Bank AI" imgw="83px"  />
         <Partners psrc={Defender}  def1="Defender Bot" imgw="83px"  />
         <Partners psrc={tatsu}  def1="TATSU" imgw="83px"  />
        </Grid>
    </Container>
    </Contbg>
  )
}

export default  Partnership