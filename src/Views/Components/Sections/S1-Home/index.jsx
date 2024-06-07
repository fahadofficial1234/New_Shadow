import React, { useEffect, useState } from 'react';
import  { Box, Container, Grid} from '@mui/material';
import MainBg from "../../../../assets/Images/heroBg.png";
import MobileVideo from "../../../../assets/Images/newDesign/MobVideo.mp4"; 
import DeskVid from "../../../../assets/Images/newDesign/DeskVideo.mp4";
import styled from '@emotion/styled';
import Regtxt from '../../Regtxt';
import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import {motion} from 'framer-motion';
import LockerMenu from '../../LockerMenu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UperBar from '../../UperBar';
import axios from 'axios';
const MotionGrid = motion(Grid);


const HeaderDesign = styled.div`
  min-height: 100dvh; 
  position: relative;
  z-index: 2;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  @media(max-width: 900px){
    min-height: 100vh;
  }
  
`
const BgVideo = styled.video`
  width:100%;
  height:calc(100vh - 0px);
  position:absolute; 
  top:0;
  left:0;
  object-fit:cover;
  display :block ;
  @media(max-width:499px){  
    display: none;
  }
` 
const BgVideo2 = styled.video`
  width:100%;
  height:calc(100vh - 100px);
  position:absolute; 
  /* z-index: 999; */
  top:0%;
  left:50%;
  transform: translate(-50%,0%);
  display: none;
  object-fit: cover;
  @media(max-width:499px){  
    display: block !important; 
  } 
`
const Spantype = styled.span`
  font-size: 54px; 
  @media(max-width:599px){  
    font-size: 21px !important; 
  }
`

const Home = () => { 
  const [pagestate , setPagestate] =  useState(false);
  const [location, setLocation] = useState(null); 
  

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json') 
        // console.log(ipResponse.data.ip)
        const response = await axios.get(`https://ipapi.co/${ipResponse?.data.ip}/json/`)
        .then(function (response) {
            // console.log("response",response);
            const data = response.data;  
              // console.log(data)
              setLocation({
                  ip: data?.ip, 
                  city: data?.city,
                  region: data?.region,
                  country: data?.country_name,
                  asn: data?.asn,
          isp: data?.org
        });
        })
        .catch(function (error) {
            console.error(error);
        });
        
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  },[]);
  return (
    <Box position={'relative'}>
      <BgVideo muted autoplay loop>
       <source  src={DeskVid} type="video/mp4"/>
      </BgVideo> 
      <BgVideo2 muted autoplay loop>
       <source src={MobileVideo} type="video/mp4"/>   
      </BgVideo2>
      <UperBar IP={location?.ip ? location?.ip : "loading"} location={location?.city ? `${location?.city}  ${location?.region}` :"loading"} ISP={ location?.isp ? ` ${location?.isp}` :"loading"}  />
    <HeaderDesign id="home">
      <LockerMenu /> 
      <Container maxWidth="xl"  sx={{ minHeight:{xs:"calc(100vh - 150px)",lg:"calc(100vh - 120px)"} ,display:"flex", flexDirection:"column", justifyContent:"end", paddingTop:{xs:"15%",md:"2%"}, paddingBottom:{xs:"15%",md:"2%"},paddingLeft:{xs:"20px"},paddingRight:{xs:"20px"}}}>
      <Grid container display="flex" justifyContent="center" >
          <MotionGrid item 
          // initial={{x:"-100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} 
          xs={12} md={8} display="flex" flexDirection="column" alignItems="center" gap={{xs:"2px",lg:""}}>
          <Paragraph  fontSize={{xs:"16px",lg:"24px"}}>Shadow Node</Paragraph>
            <Paragraph fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" ><Spantype >Your Privacy, Your Control </Spantype><br />
              Decentralized VPN</Paragraph>
            <PurpleButton href="https://shadownode.gitbook.io/shadow-node-white-paper" p="2px 20px" target="blank">Whitepaper</PurpleButton>
          </MotionGrid>
        </Grid>
      </Container>
    </HeaderDesign>
    </Box>
  );
}
 
export default Home;