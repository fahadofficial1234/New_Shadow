import React from 'react';
import  { Box, Container, Grid, Typography} from '@mui/material';
import styled from '@emotion/styled';
import Regtxt from '../../Regtxt';
import PurpleButton from '../../PurpleButton';
import {motion} from 'framer-motion';
import LockerMenu from '../../LockerMenu';
import Herofrt from "../../../../assets/Images/Image1.png";
const MotionGrid = motion(Grid);


const HeaderDesign = styled.div`
  min-height: 100dvh;
  position: relative;
  z-index: 2;
  /* scroll-snap-align:start; */
  /* background-image: url(${Herofrt}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  border-image: fill 0 linear-gradient(transparent 60%,#000 95%);
  @media(max-width: 900px){
    min-height: 100vh;
  }
  
` 
const FlexBox =  styled(Box)`
   max-width: 560px;   
  
  
` 
const Text =  styled(Typography)`
     color : white; 
     font-size: 28px; 
     font-family:PopR ;
`
const arr = [ 
  { 
    text:'Windows (64 bit)', 
    link:'https://shadownode.org/vpnexe/x-64.exe',
    disable:false
  },  
  { 
    text:'Windows (32 bit)', 
    link:'https://shadownode.org/vpnexe/x-32.exe',
    disable:false
  }, 
  // { 
  //   text:'Linux (.Deb)', 
  //   link:'https://shadownode.org/vpnexe/linux.deb',
  //   disable:false
  // },  
  { 
    text:'Linux (.AppImage)', 
    link:'https://shadownode.org/vpnexe/linux-2.0.0.AppImage',
    disable:false
  },  
  { 
    text:'Ubuntu (.AppImage)', 
    link:'https://shadownode.org/vpnexe/ubuntu-2.0.0.AppImage',
    disable:false
  },  
  { 
    text:'MacOS(M1)', 
    link:'http://shadownode.org/vpnexe/mac.zip',
    disable:false
  },
  { 
    text:'MacOS(M2)', 
    link:'http://shadownode.org/vpnexe/macM2.zip',
    disable:false
  },
  { 
    text:'Android TV', 
    link:'./shadow_node_android_tv.apk',
    disable:false
  },  
  { 
    text:'Android (Premium)', 
    link:'https://play.google.com/store/apps/details?id=com.shadownode.svpn',
    disable:false
  },  
  { 
    text:'Android (Free)', 
    link:'https://remote.shadownode.org/free.apk',
    disable:false
  },
  { 
    text:'IOS (Premium)', 
    link:'https://testflight.apple.com/join/v6hQPX5p',
    disable:false
  }, 
  { 
    text:'IOS (Free)', 
    link:'https://testflight.apple.com/join/YwVlHCje',
    disable:false
  },   
]

const Home = () => {
  return (
    <HeaderDesign id="home">
      <LockerMenu /> 
      <Container maxWidth="xl"  sx={{ minHeight:"calc(100vh - 84px)" ,display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:{xs:"15%",md:"2%"}, paddingBottom:{xs:"15%",md:"2%"},alignItems:'center', gap:"10px"}}>
            <Regtxt fs599="33px" my="0px" textalign="center" textAlign="center" maxWidth="700px">The Ultimate<span style={{fontWeight:"bold",color:"#835DFF"}}> DVPN  </span> Ultimate  <span  style={{fontWeight:"bold",color:"#835DFF"}}>Privacy</span> And <span  style={{fontWeight:"bold",color:"#835DFF"}}>Security</span> </Regtxt>
            <img src={Herofrt}  alt="hero" style={{maxWidth:'500px'}} />    
            <Text variant='h4'>Download Apps</Text>
            <FlexBox>
            { 
             arr.map((item, i) => <PurpleButton disabled={item.disable}  href={item.link}  sx={{margin :'5px !important', padding:"0px 25px !important"}}>{item.text}</PurpleButton> )
            } 
            </FlexBox>
          {/* </MotionGrid> */}
        {/* </Grid> */}
      </Container>    
    </HeaderDesign>
  );
}
 
export default Home;