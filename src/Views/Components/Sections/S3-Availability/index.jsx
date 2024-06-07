import React from 'react'; 
import styled from '@emotion/styled' 
import BG from  '../../../../assets/Images/newDesign/BGearth.png'  
import BoxLogo from  '../../../../assets/Images/newDesign/shadowBoxLogo.png' 
import linux from  '../../../../assets/Images/newDesign/Lx.png'  
import ubantu from  '../../../../assets/Images/newDesign/ubantu.png'  
import andoid from  '../../../../assets/Images/newDesign/android.png'  
import ios from  '../../../../assets/Images/newDesign/ios.png'  
import macos from  '../../../../assets/Images/newDesign/macos.png'   
import window from  '../../../../assets/Images/newDesign/window.png' 
import { Box, Container } from '@mui/material';
import { Img } from '../../../Styles/Maintext.styles'
import Paragraph from '../../Paragraph';
import AvailabilityMenu from './Components/Menu';  
import {motion} from 'framer-motion';

const MainBg = styled.div`
     background-image: url(${BG}); 
     background-position: top; 
     background-size: cover; 
     background-repeat: no-repeat; 
     min-height:${(props) =>  props.h  ? props.h :"500px"};
`    
const ScndContainer = styled(Container)`
    display: flex;  
    flex-direction: column;
    justify-content: center; 
    align-items: center;
` 
const FlexBox =  styled(Box)` 
  display:flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  gap:10px;
` 

 const main_array =  [ 
   {  
    name : "Linux", 
    w : "70%",  
    small_w : "62%",
    src  : linux,
    arr : [ 
      {
        title: "Linux (.AppImage)",
        link: 'https://shadownode.org/vpnexe/linux-2.0.0.AppImage',
        target:"blank"
      },
    ]
    }, 
    {  
      name : "Ubantu", 
      w : "70%",  
      small_w : "62%",
      src  : ubantu,
      arr : [ 
        {
          title: "Ubuntu (.AppImage)",
          link: 'https://shadownode.org/vpnexe/ubuntu-2.0.0.AppImage',
          target:"blank"
        },

      ]
      }, 
      {  
        name : "Android", 
        w : "70%",  
        small_w : "62%",
        src  : andoid,
        arr : [ 
          {
            title: 'Android TV',
            link: './shadow_node_android_tv.apk',
            target:"blank"
          },
          {
            title: 'Android (Premium)',
            link:'https://play.google.com/store/apps/details?id=com.shadownode.svpn',
            target:"blank"
          }, 
          {
            title: 'Android (Free)',
            link: 'https://remote.shadownode.org/free.apk',
            target:"blank"
          },
        ]
        },
        {  
          name : "IOS", 
          w : "70%",  
          small_w : "62%",
          src  : ios,
          arr : [ 
            {
              title: 'IOS (Premium)',
              link:'https://testflight.apple.com/join/v6hQPX5p',
              target:"blank"
            },
            {
              title: 'IOS (Free)',
              link:'https://testflight.apple.com/join/YwVlHCje',
              target:"blank"
            }, 
          ]
          }, 
          {  
            name : "Window", 
            w : "70%",  
            small_w : "62%",
            src  : window,
            arr : [ 
              {
                title:'Windows (64 bit)',
                link: 'https://shadownode.org/vpnexe/x-64.exe',
                target:"blank"
              },
              {
                title: 'Windows (32 bit)',
                link:'https://shadownode.org/vpnexe/x-32.exe',
                target:"blank"
              }
            ]
            }, 
            {  
              name : "macOS", 
              w : "70%", 
              small_w : "62%", 
              src  : macos,
              arr : [ 
                {
                  title: 'MacOS(M1)',
                  link:'http://shadownode.org/vpnexe/mac.zip',
                  target:"blank"
                },
                {
                  title: 'MacOS(M2)',
                  link: 'http://shadownode.org/vpnexe/macM2.zip',
                  target:"blank"
                }
              ]
              },  
 ] 
 const Motioncontainer = motion(Container);
const Availability = () => { 


  return (
    <MainBg>  
    {/* <Motioncontainer   initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{position:"unset"}}> */}
        <ScndContainer data-aos="fade-up" sx={{position:"relative",zIndex:"500",paddingTop:{xs:"9%",lg:"7%"},gap:"20px", paddingBottom:{xs:"15%",sm:"0px",md:"0px",lg:"10%"},marginTop:{xs:"10%",sm:"0px",md:"0px",lg:"0px"},marginBottom:{xs:"10%",sm:"0px",md:"0px",lg:"0px"}, paddingLeft:{xs:"20px",sm:"16px",md:"16px",lg:"16px"},paddingRight:{xs:"20px",sm:"16px",md:"16px",lg:"16px"}}}>   
            <FlexBox> 
                <Img src={BoxLogo} w="40%" alt="BoxLog"  />  
                <Paragraph variant="body1" fontWeight="600">We Are Available On Many Devices</Paragraph>
            </FlexBox> 
            <FlexBox gap="20px !important"> 
                <Paragraph variant="body1" fontWeight="600">Download Apps</Paragraph> 
                <FlexBox flexDirection="row !important" justifyContent="center" flexWrap='wrap' gap={{xs:"0px !important",lg:"10px"}}>    
                {main_array.map((item) => ( 
                  <AvailabilityMenu key={item.title} src={item.src} name={item.name} w={item.w} small_w={item.small_w} array={item.arr} /> 
               ))}
               </FlexBox>
            </FlexBox> 
        </ScndContainer> 
        {/* </Motioncontainer> */}
    </MainBg>
  )
}

export default Availability


