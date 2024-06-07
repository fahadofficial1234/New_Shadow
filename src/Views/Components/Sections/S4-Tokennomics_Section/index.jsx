import React from 'react' 
import styled from '@emotion/styled';  
import UprImg from  '../../../../assets/Images/newDesign/Boi_logo.png'
import BTImg from  '../../../../assets/Images/newDesign/Boi_logo.png'  
import RImg from  '../../../../assets/Images/newDesign/logo 3d.png'  
import Icon1 from  '../../../../assets/Images/newDesign/Icon1.png'  
import Icon2 from  '../../../../assets/Images/newDesign/Icon2.png'  
import Icon3 from  '../../../../assets/Images/newDesign/Icon3.png'  
import Icon4 from  '../../../../assets/Images/newDesign/Icon4.png'  
import uniswap from  '../../../../assets/Images/newDesign/uniswap.png'  
import mexc from  '../../../../assets/Images/newDesign/mexc.png' 
import { Box, Container, Grid, Link } from '@mui/material';
import Paragraph from '../../Paragraph';
import TknGrid from '../../TknDetailGr';
import PurpleButton from '../../PurpleButton';
import ColoredBox from '../../BoxCard'; 
import { StyledButtonLink, StyledList3 } from '../../../Styles/Navbar.styles'; 
import { Imagedata } from '../../LockerMenu/styles';
import CustomButton from '../../CustomBtn'; 
import zIndex from '@mui/material/styles/zIndex';


const Maindiv =  styled(Box)`
     position: relative; 
     background: ${(props) =>  props.bg ? props.bg :"#070707"};  
     min-height: 100vh; 
     display: flex; 
     justify-content: center; 
     align-items: center;
` 
const Upper_right = styled.img`
    position :absolute; 
    top: 0%; 
    right:0%; 
    transform: translate(23%, -20%);
` 
const Bottom_left = styled.img`
    position :absolute; 
    bottom: 0%; 
    left:0%; 
    transform: translate(-20%, 20%);
` 
const InnerContainer =  styled(Container)`
     display: flex; 
     flex-direction: column; 
     justify-content:  center; 
     align-items: center; 
     gap:70px;
` 
const MainGrid =  styled(Grid)` 
      display : flex ; 
      justify-content: center; 
      align-items: center;
` 
const LogoImg = styled.img`
     
` 

const navLinks = [
    {
      title: <img src={Icon1} alt="bar icon" width={55} height={55}></img>,
      link: "",
      target:"blank"
    },
    {
      title: <img src={Icon2} alt="rect icon" width={55} height={55}></img>,
      link: "",
      target:"blank"
    },
    {
      title: <img src={Icon3} alt="unicorn icon" width={55} height={55}></img>,
      link: "https://etherscan.io/address/0xc668695dcbcf682de106da94bde65c9bc79362d3",
      target:"blank"
    },
    {
      title: <img src={Icon4} alt="send icon" width={55} height={55}></img>,
      link:"https://www.dextools.io/app/en/ether/pair-explorer/0x1686f2a47709eb4cd6d0f1bf48468aac7d68da75?t=1710352969313",
      target:"blank"
  },
  ];
const  TokenomicsV2 = () => { 


  return (
    <Maindiv  sx={{paddingTop:{xs:"5%",md:"5%",lg:"7%"}, paddingBottom:{xs:"15%",md:"10%",lg:"5%"}}}>  
         <Upper_right src={UprImg} alt='UpperRightImage' style={{width:"20%", objectFit:"contain"}} /> 
         <Bottom_left src={BTImg} alt='BottomLeftImage' style={{width:"13%",  objectFit:"contain"}} />  
         <InnerContainer maxWidth="lg" data-aos="fade-up" id="tokenomics" sx={{position:"relative",zIndex:"500", paddingLeft:{xs:"30px",sm:"16px",md:"16px",lg:"16px"},paddingRight:{xs:"30px",sm:"16px",md:"16px",lg:"16px"}}} > 
         <Paragraph
          textAlign="left"
          variant="h4" 
          fontSize="clamp(2.5rem, 2.25rem + 1.25vw, 3.375rem)"
         >  
        Tokenomics             
        </Paragraph> 
         <MainGrid container  gap="50px">  
            <Grid item container xs={12} md={3} lg={3} display="flex" flexDirection='column' justifyContent='start' alignItems="start">    
                <TknGrid t1="Shadow Node" subt="Token Name" borderBottom="1px solid rgb(112, 112, 112,0.28)" padding="23px 0px" /> 
                <TknGrid t1="SVPN" subt="Ticker" borderBottom="1px solid rgb(112, 112, 112,0.28)" padding="23px 0px"/> 
                <TknGrid t1="1,000,000,000" subt="Supply" borderBottom="1px solid rgb(112, 112, 112,0.28)" padding="23px 0px" /> 
                <TknGrid t1="Erc-20" subt="Network" padding="23px 0px" > </TknGrid> 
                <PurpleButton p="2px 25px" sx={{minWidth:"150px !important",background:"transparent !important",border:"1px solid #707070",position:"relative",zIndex:"999"}} >Copy Contract Address</PurpleButton>
             </Grid> 
            <Grid item className='colordBox' container xs={12} md={6.5} lg={6.5} minHeight="500px">  
                 <Grid item xs={12} md={4.5} lg={4.5} display="flex" flexDirection={{xs:"column",lg:"column"}} justifyContent="center" alignItems="center" paddingTop={{xs:"30px",lg:""}} paddingBottom={{xs:"30px ",lg:""}} gap="20px" sx={{borderRight:"1px solid rgb(112, 112, 112,0.28)", borderBottom:{xs:"1px solid rgb(112, 112, 112,0.28)",lg:"none"}}}>    
                 <ColoredBox title1="100%" subtitle="Stealth Launch" clor="white" backgroundColor="transparent !important" /> 
                 <ColoredBox title1="4%" subtitle="Buy tax" clor="#A0FF41" padding="20px 20px 15px" flexDirection="row" /> 
                 <ColoredBox title1="4%" subtitle="Sell tax" clor="#FF4141" padding="20px 20px 15px" />
                  </Grid> 
                 <Grid item container xs={12} md={7} lg={7}> 
                    <Grid item xs={12} md={12} lg={12} display="flex"  justifyContent="center" alignItems="center"  sx={{borderBottom:"1px solid rgb(112, 112, 112,0.28)"}}>   
                    <LogoImg src={RImg} alt="logoImg" style={{width:"70%", objectFit:"contain"}} />
                    </Grid> 
                    <Grid item xs={12} md={7} lg={12} sx={{padding:"15px 0px"}} >   
                    <Grid
                       item
                       xs={12}
                       display="flex" 
                       flexDirection="column"
                       alignItems="start"
                       justifyContent="start" 
                       gap="20px"
                       sx={{ 
                        padding:{xs:"15px 15px",lg:"15px 20px"}
            //   flexDirection: { xs: "column", md: "row" },
            //   alignItems: { xs: "center", md: "center" },
                       }}
          >
            <Paragraph variant="h5" fontSize="26px" fontWeight="600"  sx={{whiteSpace:"nowrap"}}>Find us on</Paragraph>  
            <Box display="flex" justifyContent="center" alignItems="center" gap="5px">  
            {navLinks.map((item,index) => (
              <>
                
                <Link
                href={item.link}
                target={item?.target}
                  underline="none"
                  color="inherit"  
                  position="relative"
                  zIndex={9999}
                  key={index}
                  >{item.title}
                </Link>
                  </>
              ))}
            </Box>
             </Grid> 
             <Grid
            item
            xs={12}
            display="flex" 
            flexDirection="column"
            alignItems="start"
            justifyContent="start" 
            gap="10px"
            sx={{ 
                padding:{xs:"15px 15px",lg:"15px 20px"}
            //   flexDirection: { xs: "column", md: "row" },
            //   alignItems: { xs: "center", md: "center" },
            }}
          >
            <Paragraph variant="h6" fontSize="clamp(1rem, 0.8033rem + 0.9836vw, 1.75rem);" fontWeight="600" sx={{whiteSpace:"nowrap"}} >Purchase $SVPN Here</Paragraph> 
            <Box display="flex" flexDirection={{xs:"row",md:"row", lg:"row"}} justifyContent="start" alignItems="center" gap={{xs:"5px",md:"3px",lg:"5px"}} width="100%"> 
              <CustomButton bgc="linear-gradient(to right, #ff007a42 0%, transparent 60%)" br="8px" p599="12px 5px" w="150px" b="1px solid #730138"><Imagedata src={uniswap} mw="20px"/>&nbsp;&nbsp;Uniswap</CustomButton> 
              <CustomButton bgc="linear-gradient(to right,#0b366d,transparent)" w="150px" br="8px" p599="12px 5px" b="1px solid #002f81"><Imagedata src={mexc} mw="35px"/>&nbsp;&nbsp;MEXC</CustomButton>
            </Box>
             </Grid>
                    </Grid>
                 </Grid> 
             </Grid> 
         </MainGrid>
        </InnerContainer>
     </Maindiv> 
  )
}

export default TokenomicsV2