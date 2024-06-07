import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import img1 from "../../../../assets/Images/img1.png";
import Paragraph from '../../Paragraph';
import img2 from "../../../../assets/Images/img2.png";
import img3 from "../../../../assets/Images/img3.png"; 
import img4 from "../../../../assets/Images/img4.png";
import aboutBG from "../../../../assets/Images/aboutBG.jpg";
import {motion} from 'framer-motion';
import CardimgD from '../../Cardimg_DownloadPage';
const Blackbg = styled(Container)`
    background-color: ${(props) => props.noclr ? "transparent" : "#000"};
    overflow: hidden;
    position:relative;
    z-index: 0;
    min-height:  ${(props) => props.noht ? "auto" : "100vh"} ;
    display: flex;
    align-items: center;
    ::before{
        content: "";
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%,-25%);
        width: 100%;
        height: 570px;
        background-image: url(${aboutBG});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
        z-index: 0;
    }`
const MotionCont = motion(Container) 

const Why = () => {
    return (
            <Container maxWidth="xl" id="features">  
                <Grid container spacing={3}>
               <Grid item xs={12} sm={12} md={12} lg={6} > 
                <Paragraph color="#835DFF" sx={{paddingTop:"20px"}}>Features</Paragraph>
                <Maintxt maxWidth="550px" lineHeight={1.5} variant="h3" fontWeight="600" textAlign={{xs:"start", lg:'start'}} mt={2} mb={5} fontSize="clamp(2rem, 0.875vw + 1.825rem, 2.875rem)">Shadow Node VPN App Is Cross-Platform, Highly Modular And Easy To  Maintain!</Maintxt> 
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} display='flex' flexDirection='column' justifyContent='start' alignItems='center' gap="24px">
                    <CardimgD   marginTop={{xs:'none',lg:'200px'}} psrc={img1} def1="Cross-Platform" def2="Shadow Node's decentralized VPN ensures a seamless experience across multiple platforms. Whether you're on Windows, Mac, Linux, iOS, or Android, our VPN offers consistent, secure, and private internet access, adapting to your device preferences effortlessly." /> 
                    <CardimgD w='50px' psrc={img3}   def1="Documentation" def2="Navigating and optimizing your experience is made easy with our comprehensive documentation. From setup guides to troubleshooting, our detailed documentation ensures that users, whether novices or experts, can make the most out of our decentralized VPN. Empowering you to control and understand your online privacy." />
                </Grid>
                <Grid item  xs={12} sm={12} md={6} lg={3} display='flex' flexDirection='column' justifyContent='start' alignItems='center' gap="24px"> 
                   <CardimgD background="linear-gradient(to bottom,#7F59FD -10%,#161616 40%)"  marginTop={{xs:'none',lg:'150px'}} psrc={img2} def1="Decentralized" def2="Step into a new era of online privacy with a decentralized VPN. Unlike traditional VPNs, Shadow Node leverages blockchain technology for a network without a central authority, ensuring enhanced security, anonymity, and freedom from censorship. Your data remains secure with the power of decentralization." />  
                   <CardimgD  psrc={img4} def1="Secure" def2="Experience elite security with Shadow Node's decentralized VPN. Our cutting-edge technology ensures premium-grade encryption, safeguarding your online activities from potential threats. Enjoy the highest level of security and privacy in every online interaction with Shadow Node's advanced VPN solution." />  
                </Grid>  
              
                </Grid>
            </Container>
    );
}

export default Why;