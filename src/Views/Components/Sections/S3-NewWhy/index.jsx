import React from 'react'
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import Regtxt from '../../Regtxt';
import whyBg from '../../../../assets/Images/newDesign/whyBg.png'
import Paragraph from '../../Paragraph';
import { Img } from '../../../Styles/Maintext.styles';
import Mediumtxt from '../../Mediumtxt';
const Blackbg = styled(Container)`
    background-image: url(${whyBg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height:700px;
    padding-top:150px;
    padding-bottom:150px;
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


const  WhySection = () => { 

  return (
    <Blackbg  maxWidth="xl" sx={{padding:{xs:"50px 30px !important",lg:"150px 16px !important"}}}>   
      <Grid container data-aos="fade-up" padding={{xs:"0px",lg:"0 10px",}} display='flex' flexWrap="wrap" justifyContent='center' gap="30px 70px" sx={{position:"relative",zIndex:"500"}}>
        <GridLay item xs={12} sm={9}>
        <Paragraph  fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" mb="40px" textAlign="left">What Is Shadow Node?</Paragraph>
        <Paragraph fontSize="clamp(1.625rem, 1.4107rem + 1.0714vw, 2.375rem)" textAlign="left" color="#8D8D8D" lineHeight="1.4">
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
        </GridLay>
      </Grid>
    </Blackbg>
  )
}

export default  WhySection