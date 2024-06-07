import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Pic2 from "../../../../assets/Images/pic2.png";
import Paragraph from '../../Paragraph';
import group5 from "../../../../assets/Images/Shadow_Node_Seller/group5.png";
import Pic3 from "../../../../assets/Images/pic3.png";
import {motion} from 'framer-motion';
import CardimgD from '../../Cardimg_DownloadPage';
import PurpleButton from '../../PurpleButton';
import Regtxt from '../../Regtxt'; 
import TelegramIcon from '@mui/icons-material/Telegram';  
import Mask from "../../../../assets/Images/Shadow_Node_Seller/Mask.png";
import CardSell from '../../SellerCard/Index'; 
import pricing from "../../../../assets/Images/Shadow_Node_Seller/pricing.png"; 
import labelapp from "../../../../assets/Images/Shadow_Node_Seller/labelapp.png"; 
import api from "../../../../assets/Images/Shadow_Node_Seller/api.png";

    
    const Gridbg = styled(Grid)` 
    background-color:${(props) => props.bg ? props.bg: "transparent"};
    min-height:  ${(props) => props.noht ? "auto" : "700px"} ;
    display: flex; 
    flex-direction: column;
    align-items: center;
        width: 100%;
        background-image: url(${(props) => props.img});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
     ` 
     
     const ContainerBox =  styled(Container)`  
       display: flex; 
       flex-direction: column; 
       justify-content: center; 
       gap:300px; 
       min-height: auto;
     `
     const MotionCont = motion(Container)
const WhySeller = () => {
    return (
        <ContainerBox maxWidth="xl" id="features">   
              <Grid container display="flex" minHeight="auto" gap={5}>   
                  <Gridbg img={Mask} bg="#090909" item xs={12}  lg={5.8}  display='flex' flexDirection='column' justifyContent='start' gap="20px" padding={{xs:'10px 20px 0px 0px', lg:"20px 20px 0px 40px" }} > 
                    <Regtxt variant="h2" fontSize="clamp(2.813rem, 0.845vw + 2.614rem, 3.375rem)"  width="90%" fontWeight="500">  
                    Start Your Own VPN 
                    Service Today
                    </Regtxt> 
                    <Paragraph variant="body1" fontSize="large"  fontWeight="500" width='100%' paddingLeft="50px" >  
                     <span style={{fontWeight:"bold",color:"#835DFF"}}> No consultation fees,</span>simply request to chat with our customer support.
                    </Paragraph> 
                    <Paragraph variant="body1" fontSize="large" fontWeight="500" width='100%' paddingLeft="50px"> 
                     <span style={{fontWeight:"bold",color:"#835DFF"}}>No programming knowledge </span>required, we take care of the servers and everything else.
                    </Paragraph>
                  </Gridbg>  
                  <Grid item  xs={12}  lg={5.8} display='flex' flexDirection='column' gap="30px" > 
                   <CardSell imgw='45px' psrc={pricing}    def1="Best Pricing" def2="Unlock competitive pricing with our Reseller Program, offering you the best rates in the market. Maximize your profit margins while providing your clients with top-notch decentralized VPN services, ensuring affordability without compromising quality." /> 
                   <CardSell imgw='45px' psrc={labelapp}    def1="White Label Apps" def2="Tailor our VPN solution to fit your brand seamlessly. Utilize our White label Apps to showcase your business identity, providing clients with a personalized and cohesive experience while benefiting from the powerful features of Shadow Node's decentralized VPN." /> 
                   <CardSell imgw='45px' psrc={api}    def1="API" def2="Integrate and innovate with ease using our Reseller Program's API. Streamline operations, customize solutions, and enhance user experiences by leveraging our API, giving you the flexibility to adapt Shadow Node's decentralized VPN services to your unique business requirements." />

                  </Grid> 
                  
              </Grid>
              <Grid container  gap="20px 10px"  display='flex' alignItems="start" justifyContent="space-between" minHeight="auto" >
                    <Grid item xs={12} sm={5.9}  md={5.9} lg={5.9}>  
                    <CardimgD obj="cover" mtxt="32px" ptxt="17px" imgheight="340px"  w="100%" height="" padding="0px"  bgap="15px" padd="30px 30px" cardHeight="500px !important"  psrc={Pic3} def1="Decentralized Nodes" def2="Stand out in the market by offering a truly decentralized VPN experience. With our Reseller Program, provide your clients with access to a global network of decentralized nodes, ensuring unparalleled security, privacy, and unrestricted internet access." />
                    </Grid> 
                    <Grid item  xs={12} sm={5.9} md={5.9} lg={5.9}>  
                    <CardimgD obj="cover" mtxt="32px" ptxt="17px"  imgheight="340px" w="100%" padding="0px" bgap="15px" padd="30px 30px" psrc={Pic2} def1="FIAT & Crypto On-Ramps" def2="Enable your clients to subscribe seamlessly with our Reseller Program's integrated FIAT & Crypto On-Ramps. Expand payment options, allowing users to pay for decentralized VPN services using traditional currencies or cryptocurrencies, providing a convenient and inclusive payment experience." />
                    </Grid> 
                    <Gridbg item   noht img={group5}  padding="30px 0px"> 
                    <Regtxt fs599="33px" my="0px" fontWeight="500" textAlign="center" fontSize=" ">Start Your Own VPN Business</Regtxt>
                    <Paragraph padding="10px 10px"  fontWeight="300" sx={{maxWidth:"600px"}} textAlign="center" fontSize="clamp(1rem, 0.179vw + 0.964rem, 1.125rem)"  >Embark on your entrepreneurial journey with confidence. Start your own VPN business effortlessly and offer the future of decentralized, secure internet access.</Paragraph>
                    <PurpleButton href='https://t.me/ppbigg' target="blank" sx={{ padding:"0px 20px !important", minHeight:'44px !important', fontSize:"clamp(1rem, 0.536vw + 0.893rem, 1.375rem) !important", background: 'linear-gradient(to right,#090909 30%, #2E2E2E 75%  ) !important'}}><TelegramIcon color="white" sx={{fontSize:'clamp(2.125rem, 0.893vw + 1.946rem, 2.75rem)!important'}} />Get Free Consultation</PurpleButton>
                    </Gridbg>
                </Grid>  
        </ContainerBox>
           
    );
}
 
export default WhySeller;