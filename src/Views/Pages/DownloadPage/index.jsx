import React from 'react';
import styled from '@emotion/styled';
import { useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import earth from "../../../assets/Images/earth.jpg"
import Home from '../../Components/DownloadPageSections/S1-Home';
import Why from '../../Components/DownloadPageSections/S2-Why';
import Faq from '../../Components/DownloadPageSections/S6-Faq';
import { Box } from '@mui/material';
import Summary from '../../Components/Sections/S7-Summary';


const Styleddiv = styled(Box)`
    position: relative;
    z-index: 0;
    width:100%;
    overflow: hidden;
    scroll-snap-align:start;
    min-height:100vh; 

    
  background-image: url(${earth});
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  @media(max-width: 899px){
    background-position: top;   
  background-size: auto 110vh;
  }
`
const Backimg = styled.img`
    position: absolute;
    object-fit: cover;
    height: auto;
    width:100%;
    top: 25%;
    right: 0%;
    z-index: -1;
    overflow: hidden;
    @media(max-width:900px){
        width:100%;
    }
    @media(min-width:320px) and (max-width:900px){
    top:25%;
    }
    @media(min-width:1600px){
    top: 0%;
}

`

const Motionimg = motion(Backimg)

const DownloadPage = () => {
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setDisplay(false);
        }, 4000);
    
          
        }, []); 
  
    return (
        <>
            <Home />
            <Why/>
            {/* <ElevateExperience/>  */}
            {/* <Purple/> */}
            <Styleddiv sx={{paddingTop:{xs:'150px', lg:'250px '}}}>
            {/* <Tokenomics/> */}
                {/* <Motionimg initial={{y:"50%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={Back} />
                <Numbers/> */}
                <Faq />
            </Styleddiv>
            <Summary />
            {/* <End/> */}
        </>
    );
}
 
export default DownloadPage;