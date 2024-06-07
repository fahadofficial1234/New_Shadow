import React from 'react'
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import Regtxt from '../../Regtxt';
import comingSoonBg from '../../../../assets/Images/newDesign/comingSoonBg.png'
import shadowTalk from '../../../../assets/Images/newDesign/shadowTalk.png'
import shadowTalkVideo from '../../../../assets/Images/newDesign/Shadow Talk Design Preview.mp4'
import Paragraph from '../../Paragraph';
import { Img } from '../../../Styles/Maintext.styles';
import Mediumtxt from '../../Mediumtxt';
import zIndex from '@mui/material/styles/zIndex';
const Blackbg = styled(Box)`
    background-image: url(${comingSoonBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 50px 0;
    `
   const GridLay = styled(Grid)`
   &:hover{
     &>.MuiTypography-root{
      &>.colerd{
        color:#663CED;
     }
     &>.colerdLight{
      color:#B471F5;
   }
    }
  }
 ` 
const Video = styled.video`
width:100%;
height:auto;
object-fit:contain;

`


const  ComingSoon = () => { 

  return (
    <Blackbg >   
    <Container maxWidth="lg"  data-aos="fade-up" sx={{position:"relative",zIndex:"500",  paddingLeft:{xs:"30px",sm:"16px",md:"32px",lg:"16px"},paddingRight:{xs:"30px",sm:"16px",md:"16px",lg:"16px"}}} >   
      <Grid container padding={{xs:"0px",lg:"0 10px"}} display='flex' gap="30px 0">
        <Grid item xs={12} sm={6} display="flex" flexDirection="column" justifyContent="start" alignItems="start">
          <Paragraph  variant="h4" fontSize="clamp(1.5rem, 1.3214rem + 0.8929vw, 2.125rem)" mb="20px" textAlign="left">Coming Soon</Paragraph>
          <Paragraph fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" textAlign="left"  lineHeight="1.4">
            Decentralized <br />
            Video Calling And <br />
            Messaging App 
          </Paragraph>
          <Box mt="20px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="15px"> 
            <Img w="170px" small_w="110px"  src={shadowTalk} alt="pic" />
            <Paragraph mb="20px" fontWeight="700" fontFamily="PoppinsB" fontSize={{xs:"14px",lg:"20px"}}  sx={{position:"relative",zIndex:"999"}}>Shadow Talk</Paragraph>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Video autoPlay controls style={{position:"relative",zIndex:"999"}} > 
            <source src={shadowTalkVideo} type="video/mp4" />
          </Video>
        </Grid>
        {/* <GridLay item xs={12} sm={9}>
        <Paragraph  fontSize="clamp(2.5rem, 2.25rem + 1.25vw, 3.375rem)" mb="40px" textAlign="left">What Is Shadow Node?</Paragraph>
        <Paragraph variant="h4" textAlign="left" color="#8D8D8D" lineHeight="1.4">
          Shadow Node is a next-generation 
        <Paragraph className="colerd" sx={{transition:"0.5s"}} fontfamily="PoppinsB" fontWeight="bolder" variant="span" color="#8D8D8D" >
          &nbsp;decentralized Virtual Private Network (dVPN)
        </Paragraph>
          &nbsp;that uses innovative 
        <Paragraph fontfamily="PoppinsB" fontWeight="bolder" variant="span" color="#fff">
          &nbsp;blockchain technology
        </Paragraph>
          &nbsp;to provide secure, private, and user-friendly internet access. Unlike traditional VPNs, Shadow Node relies on a 
        <Paragraph className="colerdLight" sx={{transition:"0.5s"}} fontfamily="PoppinsB" fontWeight="bolder" variant="span" color="#8D8D8D">
          &nbsp;distributed network of user-operated nodes 
        </Paragraph>
          &nbsp;to ensure enhanced security and reliability.

        </Paragraph>
        </GridLay> */}
      </Grid>
    </Container>
    </Blackbg>
  )
}

export default  ComingSoon