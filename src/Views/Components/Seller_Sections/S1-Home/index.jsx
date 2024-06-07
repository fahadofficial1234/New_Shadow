import React from 'react';
import  { Container, Grid} from '@mui/material';
import MainBg from "../../../../assets/Images/heroBg.jpg";
import styled from '@emotion/styled';
import Regtxt from '../../Regtxt';
import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import {motion} from 'framer-motion';
import LockerMenu from '../../LockerMenu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';  
import TelegramIcon from '@mui/icons-material/Telegram'; 
import Hero from "../../../../assets/Images/Shadow_Node_Seller/Hero.png";
const MotionGrid = motion(Grid);


const HeaderDesign = styled.div`
  min-height: 100dvh;
  position: relative;
  z-index: 2;
  /* scroll-snap-align:start; */
  /* background-image: url(${MainBg}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  border-image: fill 0 linear-gradient(transparent 60%,#000 95%);
  @media(max-width: 900px){
    min-height: 100vh;
  }
  
`


const HomeSeller = () => {
  return (
    <HeaderDesign id="home">
      <LockerMenu /> 
      <Container maxWidth="xl"  sx={{ minHeight:"calc(100vh - 84px)" ,display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:{xs:"15%",md:"2%"}, paddingBottom:{xs:"15%",md:"2%"}}}>
      <Grid container spacing={{xs:'20px' , lg:'none'}}>
          <Grid item xs={12} md={12} lg={6} display='flex' flexDirection='column' justifyContent='start' gap="10px" paddingTop={{xs:'none !important',lg:'100px !important'}} >  
          <Regtxt fs599="33px" my="0px" fontSize="clamp(3.125rem, 0.893vw + 2.946rem, 3.75rem)!important" >VPN <span style={{fontWeight:"bold",color:"#835DFF"}}>Reseller  </span> Program </Regtxt>
            <Paragraph padding="10px 0" fontWeight="500" sx={{maxWidth:"535px"}} fontSize="20px">Are you an entrepreneur? Do you want to earn extra revenue with your website? Offer your new or existing customers your own VPN service.</Paragraph>
            <PurpleButton href='https://t.me/ppbigg' target="blank" sx={{ padding:"0px 20px !important", minHeight:'44px !important', fontSize:"clamp(1rem, 0.536vw + 0.893rem, 1.375rem) !important"}}><TelegramIcon color="white" sx={{fontSize:'clamp(2.125rem, 0.893vw + 1.946rem, 2.75rem)', paddingRight:"2px"}} />Get Free Consultation</PurpleButton>
          </Grid > 
          <Grid item sx={12} md={12} lg={6}>  
             <img src={Hero} alt="sellerpic" style={{width:"100%"}} />
          </Grid>
        </Grid>
      </Container>
    </HeaderDesign>
  );
}
 
export default HomeSeller;