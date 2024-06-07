import React from 'react';
import { Container, Grid } from '@mui/material';
import { Blackbg, Blackdiv, Img} from '../../../Styles/Maintext.styles';
import styled from '@emotion/styled';
import Maintxt from '../../Maintxt';
import Paragraph from '../../Paragraph';
import Buttontrans from '../../Buttontrans';
import Mediumtxt from '../../Mediumtxt';
import Numpic from "../../../../assets/Images/numpic.png";
import Regtxt from '../../Regtxt';
import {motion} from 'framer-motion';

const MotionGrid = motion(Grid)

const Mixer = () => {
    return (
        <Blackbg noclr noht>
            <Container maxWidth="xl" sx={{py:"100px"}}>
                <Grid container gap={8}>
                    <MotionGrid initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} item md={4} xs={12}>
                        <Img src={Numpic} alt="num pic" />
                    </MotionGrid>
                    <MotionGrid initial={{x:"20%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}}  item md={6} xs={12}>
                        <Regtxt my="0px">Our Numbers Are</Regtxt>
                        <Regtxt my="0px">The <Maintxt variant="h2" component="span" color="#6916F9" my="0px">Most Secured</Maintxt></Regtxt>
                        <Paragraph>At MobETH, we prioritize the security of your contact numbers, implementing state-of-the-art encryption technologies to fortify your privacy. Our commitment to the highest standards of data protection ensures that your contact details are shielded from any unauthorized access, setting a new benchmark for confidentiality in the digital landscape. Rest assured, your information is handled with the utmost care, making MobETH the epitome of secure and confidential communication.
                        <br/><br/>With a relentless focus on security, MobETH stands as a trusted guardian of your privacy. Our dedication to robust security protocols establishes a fortress around your contact numbers, providing you with peace of mind in an era where digital privacy is paramount. Choose MobETH for the most secure communication experience, where your confidentiality is our top priority.</Paragraph>
                    </MotionGrid>
                </Grid>
            </Container>
        </Blackbg>
    );
}
 
export default Mixer;