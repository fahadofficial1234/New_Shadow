import React from 'react';
//import Marquee from "react-fast-marquee";
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/newDesign/pic1.png";
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/newDesign/pic2.png";
import Pic3 from "../../../../assets/Images/newDesign/pic3.png";
import aboutBG from "../../../../assets/Images/newDesign/aboutBG.jpg";
import Cardimg from '../../Cardimg';
import {motion} from 'framer-motion';
const Blackbg = styled(Box)`
    background-image: url(${aboutBG});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    `
const MotionCont = motion(Container)
const Why = () => {
    return (
        <Blackbg  >
        <Container maxWidth="xl" id="features" sx={{padding:{xs:"0px"}}} >
            {/* <Motionimg initial={{x:"-100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={Purplebg} alt="purple pic" /> */}
            <MotionCont  maxWidth="lg" initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:{xs:"0px",lg:"100px"},paddingTop:{xs:"0px", md:"50px"} }}>
            {/* <Paragraph color="#835DFF" sx={{paddingTop:"20px"}}>Features</Paragraph> */}
                <Maintxt textAlign="center" fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" mt={2} mb={5}>Unique Features</Maintxt>
                <Grid container gap={3} alignItems="start" justifyContent="center">
                    <Cardimg w="220px" small_Width="155px"   psrc={Pic1} def1="Decentralized Infrastructure" def2="Our network is distributed across numerous user-operated nodes worldwide. This approach enhances security by eliminating single points of failure and reducing the risk of centralized attacks." />
                    <Cardimg w="250px" small_Width="155px"   psrc={Pic2} def1="Enhanced Performance" def2="Shadow Node offers lightning-fast speeds and minimal latency through its decentralized architecture. Our vast network of optimized nodes ensures smooth, uninterrupted browsing, streaming, and gaming." />
                    <Cardimg w="255px" small_Width="160px"    psrc={Pic3}  def1="Strict No-Log Policy" def2="At Shadow Node, your privacy is paramount. We enforce a strict no-logs policy, ensuring that your online activities are never tracked, recorded, or shared. Browse the internet freely and anonymously with complete peace of mind." />
                    {/* <Cardimg psrc={Pic4} def1="Seamless Payments" def2="MobETH streamlines your experience with effortless funding options. Replenish your account seamlessly using a variety of payment methods, including e-wallets, bank cards, or cryptocurrencies. Enjoy the convenience of managing your payments with simplicity and ease." /> */}
                </Grid>
            </MotionCont>
        </Container>
        </Blackbg>
           
    );
}
 
export default Why;