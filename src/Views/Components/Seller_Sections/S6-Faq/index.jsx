import React from 'react';
import { Blackbg } from '../../../Styles/Maintext.styles';
import {Container } from '@mui/material';
import AccordianDesign from '../../AccordianDesign';
import Maintxt from '../../Maintxt';
import {motion} from 'framer-motion';

const Motioncont = motion(Container)

const FaqSeller = () => {
    return (
            <Blackbg noht noclr id="faq">
                <Motioncont  initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{paddingTop:"50px", paddingBottom:"150px"}}>
                    <Maintxt fontWeight="bold" textAlign="center">FAQ</Maintxt>
                    <AccordianDesign def1="How Does The Shadow Node VPN Reseller Program Benefit My Business?" def2="The Reseller Program empowers your business by offering competitive pricing, white label apps for brand customization, access to decentralized nodes, and seamless FIAT & Crypto On-Ramps. It's a comprehensive solution to kickstart and scale your own VPN business." ></AccordianDesign>
                    <AccordianDesign def1="Can I Integrate The Shadow Node VPN Reseller Program Into My Existing Services Or Platforms?" def2="Absolutely! Our API allows easy integration, enabling you to tailor the VPN services seamlessly into your existing business infrastructure. This flexibility ensures a smooth and cohesive experience for your clients."></AccordianDesign>
                    <AccordianDesign def1="How Are Decentralized Nodes Advantageous For My VPN Reselling Business?" def2="Decentralized nodes provide enhanced security and privacy for your clients. By offering a global network of nodes, your VPN services become more resilient, ensuring users enjoy unrestricted internet access while benefiting from a decentralized and secure network architecture."></AccordianDesign>
                </Motioncont>
            </Blackbg>
    );
}
 
export default FaqSeller;