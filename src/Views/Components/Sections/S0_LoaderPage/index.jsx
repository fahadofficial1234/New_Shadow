import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'  
import loadimg from '../../../../assets/Images/newDesign/loadImg.jpg' 
import { Box, Container } from '@mui/material'
import Paragraph from '../../Paragraph' 
import axios from 'axios'; 
import Maintitle from '../../Title'
import CustomButton from '../../CustomBtn'
 

 const BgBx = styled(Box)`  
  background-image: url(${loadimg}); 
  background-repeat  :  no-repeat; 
  background-position: center; 
  background-size: cover; 
  height: 100vh;
  width : 100vw;
  display:flex;  
  justify-content:center; 
  align-items: cenetr; 
  overflow: hidden; 
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999;
`   

const Flex = styled(Box)`
    display: flex;
    background: #07070775;
    backdrop-filter:opacity(0.5);   
    padding: 10px 10px; 
    border-radius:  8px; 
    width : 100%; 
`

const LoaderPage = (props) => {  
           
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
    <BgBx> 
        <Container maxWidth="lg" data-aos="fade-up"   sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>  
         <Box className="colordBox" maxWidth="900px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="20px" padding={{xs:"25px 40px" ,lg:"25px 50px"}} width="calc(100% - 50px)">   
        <Flex sx={{flexDirection:{xs:'row',sm:"row", lg:'row'}, gap:{xs:'10px',sm:'20px', lg:'20px'} ,justifyContent:{xs:"center",sm:"center",lg:'center'},alignItems:{xs:'center'},padding:{xs:{},lg:"20px 20px"}}} >
        <Maintitle h1txt="Your IP:" fntw="600" subtxt={location?.ip} /> 
        <Box display={{xs:"none",md:"flex",lg:"flex"}}  gap={{xs:'10px',sm:'20px', lg:'20px'}}>  
        <Maintitle h1txt="Location:" fntw="600"  subtxt={location?.city}  />  
        <Maintitle  h1txt="ISP:"  fntw="600"   subtxt={location?.isp}  />  
        </Box> 
        <Maintitle  h1txt="Status:" fntw="600"  subtxt="Unprotected" clrsub="#FF2A2A "  /> 
       </Flex> 
         <Paragraph variant="body1" fontWeight="600" > 
         You want to fade it out?
         </Paragraph>  
         {/* <PurpleButton  p="2px 20px" target="blank" onClick={() => props.setPageState(true)}>View</PurpleButton> */}
         <CustomButton bgc="linear-gradient(110deg,#663CED 30%,#FFA5FD)" br="8px" p599="8px 12px" w="80px" b="1px solid #140447" fontSize="17px" onClick={() => props.setPageState(false)} >Yes</CustomButton>
         </Box> 
        </Container>
    </BgBx>
  )
}

export default LoaderPage;