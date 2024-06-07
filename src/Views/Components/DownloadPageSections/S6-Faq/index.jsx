import React from 'react';
import { Blackbg } from '../../../Styles/Maintext.styles';
import {Container } from '@mui/material';
import AccordianDesign from '../../AccordianDesign';
import Maintxt from '../../Maintxt';
import {motion} from 'framer-motion';

const Motioncont = motion(Container)

const Faq = () => {
    return (
            <Blackbg noht noclr id="faq">
                <Motioncont  initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{paddingTop:"50px", paddingBottom:"150px"}}>
                    <Maintxt fontWeight="bold" textAlign="center">FAQ</Maintxt>
                    <AccordianDesign def1="1. How does a decentralized VPN help me?" def2="Shadow Node's decentralized VPN goes beyond traditional VPNs by leveraging blockchain technology. It ensures enhanced security, privacy, and freedom from censorship through a network without a central authority. This innovative approach provides users with a more resilient and private online experience."></AccordianDesign>
                    <AccordianDesign def1="2. Can I Use Shadow Node's VPN On Multiple Devices And Platforms?" def2="Yes, absolutely. Shadow Node's decentralized VPN is designed to offer a cross-platform and seamless experience. Whether you're using Windows, Mac, Linux, iOS, or Android, our VPN adapts to your device preferences, providing you consistent and secure internet access across various platforms on upto 5 concurrent devices!"></AccordianDesign> 
                    <AccordianDesign def1="3. How Does Shadow Node's VPN Handle User Data And Ensure Privacy?" def2="Shadow Node follows a strict no-logs policy, meaning we don't store any user data. Our decentralized VPN architecture is designed to prioritize user privacy, ensuring that your online activities remain confidential and secure."></AccordianDesign>
                </Motioncont>
            </Blackbg>
    );
}
 
export default Faq;