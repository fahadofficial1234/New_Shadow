import React from "react";
import { Grid, Link, Container, Typography, Box } from "@mui/material";
import Paragraph from "../../Paragraph";
import MainIcon from "../../../../assets/Images/MainIcon.png";
import x from "../../../../assets/Images/newDesign/x.png";
import tg from "../../../../assets/Images/newDesign/tg.png";
import styled from "@emotion/styled";
import { Blackbg } from "../../../Styles/Maintext.styles";
import Footer from "../Footer";

const MainIconImg2 = styled.img`
  width: 40px;
  height: auto;
`;

const WhiteLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Summary = () => {
  
  return (
    <><Box sx={{background: "linear-gradient(to right,#090909,#000000)"}} padding={{xs:"10px 0px", lg:"10px,0px"}}>

      <Blackbg noht noclr>
        <Container
          maxWidth="lg" 
          data-aos="fade-up"
          sx={{position:"relative",zIndex:"500", paddingTop:{xs:"0px", lg:"50px"}, paddingBottom:{xs:"0px",lg:"50px"}, paddingLeft:{xs:"30px",sm:"16px",md:"16px",lg:"16px"},paddingRight:{xs:"30px",sm:"16px",md:"16px",lg:"16px"}}}
        >
          <Grid container display="flex" flexDirection={{xs : "column",sm:'row', md:"row" ,lg:"row"}} justifyContent="space-between" alignItems={{xs:'start'}} gap={{xs:"10px",sm:"0px",md:"0px",lg:"0px"}}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap:"10px",
                alignItems: {
                  xs: "start",
                  md: "start",
                  marginTop: { xs: "20px", md: "0px" },
                },
              }}
            >
              <Link
                href="/"
                underline="none"
                color="inherit"
                display="flex"
                alignItems={{xs:'center',md:'center'}}
                gap={1}
              >
                <MainIconImg2 src={MainIcon} alt="Shadow Node" />
                  <Typography  variant="h6" color="white"  fontFamily="OpenSans">
                  Shadow  
                  <Typography variant="h6" color="white" component="span"  fontFamily="OpenSans">
                  &nbsp; Node
                  </Typography>
                  </Typography>
              </Link>
              <Paragraph
                variant="caption"
                maxWidth="250px"
                sx={{
                  textAlign: { xs: "start", md: "start" },
                }}
              >
              Shadow Node redefines online privacy through a decentralized VPN for secure, private, and unrestricted internet access.
              </Paragraph>
              <Paragraph
                variant="body2" 
                maxWidth="250px"
                sx={{
                  textAlign: { xs:"start", md: "start" },
                }}
              >
                Copyright © 2024 Shadow Node
              </Paragraph>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap:"10px",
                alignItems: {
                  xs: "start",
                  md: "end",
                  marginTop: { xs: "20px", md: "0px" },
                },
              }}
            >
              
              <Box display="flex" gap="20px">

              <Link
                href="https://twitter.com/shadownodeVPN"
                underline="none"
                color="inherit"
                display="flex"
                alignItems={{xs:'start',md:'center'}}
                gap={1}
              >
                <MainIconImg2 src={x} alt="Shadow Node" />
              </Link>
              <Link
                href="https://t.me/shadownodeVPN"
                underline="none"
                color="inherit"
                display="flex"
                alignItems={{xs:'start',md:'center'}}
                gap={1}
              >
                <MainIconImg2 src={tg} alt="Shadow Node" />
              </Link>
              </Box>
              <Paragraph
                variant="caption"
                maxWidth="320px"
                sx={{
                  textAlign: { xs: "left", md: "right" },
                }}
              >
                You can email <Paragraph variant="span" sx={{textDecoration:"underline"}}>info@shadownode.org</Paragraph> to provide 
                feedback for support requests.
              </Paragraph>
              <Box display="flex" gap="20px">

              <Link
                href="/"
                underline="none"
                color="inherit"
                display="flex"
                alignItems={{xs:'start',md:'center'}}
                gap={1}
              >
                <Paragraph
                variant="body2" 
                maxWidth="250px"
                sx={{
                  textAlign: { xs:"start", md: "start" },textDecoration:"underline"
                }}
              >
                Privacy Policy
              </Paragraph>
              </Link>
              <Link
                href="/"
                underline="none"
                color="inherit"
                display="flex"
                alignItems={{xs:'start',md:'center'}}
                gap={1}
              >
                <Paragraph
                variant="body2" 
                maxWidth="250px"
                sx={{
                  textAlign: { xs:"start", md: "start" },textDecoration:"underline"
                }}
              >
                Terms & conditions
              </Paragraph>
              </Link>
              </Box>
            </Grid>
            
          </Grid>
        </Container> 
        <Footer />
      </Blackbg>
          </Box>
    </>
  );
};

export default Summary;
