import React from 'react';
import { Blackbg } from '../../../Styles/Maintext.styles';
import {Container } from '@mui/material';
import AccordianDesign from '../../AccordianDesign';
import Maintxt from '../../Maintxt';
import {motion} from 'framer-motion';

const Motioncont = motion(Container)

const Faq = () => {
    return (
            <Blackbg data-aos="fade-up" noht noclr id="faq" style={{position:"relative",zIndex:99}}>
                {/* <Motioncont maxWidth="lg"  initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}}  sx={{paddingTop:"50px", paddingBottom:{xs:"70px",lg:"150px"}}}> */} 
                    <Container sx={{paddingTop:"50px", paddingBottom:{xs:"70px",lg:"150px"}, paddingLeft:{xs:"30px",sm:"16px",md:"16px",lg:"16px"},paddingRight:{xs:"30px",sm:"16px",md:"16px",lg:"16px"}}}> 
                        <Maintxt fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)"  textAlign="center">Frequently Asked Questions</Maintxt>
                        <AccordianDesign def1="How Does Shadow Node Ensure Privacy In Its Decentralized VPN?" def2="Shadow Node employs provable encryption, distributed exit nodes, and a relay network to guarantee enhanced security and privacy. Your online activities are shielded from prying eyes, ensuring a confidential and secure browsing experience." ></AccordianDesign>
                        <AccordianDesign def1="What Role Do SVPN Tokens Play In The Shadow Node Ecosystem?" def2="SVPN tokens serve a multifaceted purpose within our ecosystem. They are utilized for governance, enabling holders to participate in decision-making. Additionally, SVPN tokens are staked by node operators to secure the network and earn rewards, while users can use them for payments within the decentralized VPN infrastructure."></AccordianDesign>
                        <AccordianDesign def1="How Can I Get Involved And Earn Rewards By Running A Node On Shadow Node?" def2="Running a node on Shadow Node is a valuable contribution to the network. By doing so, you actively participate in securing the infrastructure and are rewarded with SVPN tokens. Simply stake your tokens, engage in governance decisions, and provide bandwidth to earn fair compensation while shaping the future of decentralized virtual private networks."></AccordianDesign> 
                    </Container>
                {/* </Motioncont> */} 
            </Blackbg>
    );
}
 
export default Faq;