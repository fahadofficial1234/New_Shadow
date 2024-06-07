import React from 'react';
import styled from '@emotion/styled';
import { useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import earth from "../../../assets/Images/earth.jpg"
import HomeSeller from '../../Components/Seller_Sections/S1-Home';
import FaqSeller from '../../Components/Seller_Sections/S6-Faq';
import WhySeller from '../../Components/Seller_Sections/S2-Why';
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

const SellerPage = () => {
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setDisplay(false);
        }, 4000);
    
          
        }, []); 
  
    return (
        <> 
            <HomeSeller/>
            <WhySeller />
             <Styleddiv sx={{paddingTop:{xs:'150px', lg:'250px'}}}>
                <FaqSeller />
            </Styleddiv>
            <Summary/>
        </>
    );
}
 
export default SellerPage;