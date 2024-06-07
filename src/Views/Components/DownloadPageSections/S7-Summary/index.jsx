import React from "react";
import { Grid, Link, Container, Typography, Box } from "@mui/material";
import Paragraph from "../../Paragraph";
import MainIcon from "../../../../assets/Images/MainIcon.png";
import styled from "@emotion/styled";
import { Blackbg } from "../../../Styles/Maintext.styles";
import PurpleButton from "../../PurpleButton";
import Maintxt from "../../Maintxt";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainIconImg2 = styled.img`
  width: 40px;
  height: auto;
`;

const WhiteLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Summary = () => {
  const navLinks = [
  { title: "Home", link: "/" },
  { title: "Features", link: "#features" },
  { title: "Tokenomics", link: "/#tokenomics" },
  { title: "Pricing", link: "/#pricing" },
  ];
  return (
    <><Box bgcolor="#090909" padding="20px 0">

      <Blackbg noht noclr>
        <Container
          maxWidth="xl"
          sx={{ paddingTop: "50px", paddingBottom: "50px"}}
        >
          <Grid container display="flex" flexDirection={{xs : "column", lg:"row"}} justifyContent="space-between" alignItems={{xs:'start'}}>
            <Grid
              item
              md={6}
              xs={12}
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
                alignItems={{xs:'start', md:'center'}}
                gap={1}
              >
                <MainIconImg2 src={MainIcon} alt="anonsol" />
                  <Typography  variant="h6" color="white"  fontFamily="OpenSans">
                  Shadow  
                  <Typography variant="h6" color="white" component="span"  fontFamily="OpenSans">
                  &nbsp; Node
                  </Typography>
                  </Typography>
              </Link>
              <Paragraph
                color="#FFFFFF"
                variant="caption"
                maxWidth="240px" 
                fontFamily="PopR"
                sx={{
                  textAlign: { xs: "start", md: "start" },
                }}
              >
              Shadow Node redefines online privacy through a decentralized VPN for secure, private, and unrestricted internet access.
              </Paragraph>
              {/* <Paragraph
                color="#A8A8A8"
                variant="body2" 
                maxWidth="250px"
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
               Email: info@shadownode.org
              </Paragraph> */}
              <PurpleButton href="/download">Get VPN<ArrowForwardIcon /></PurpleButton>
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap:"5px",
                alignItems: {
                  xs: "start",
                  md: "start",
                  marginTop: { xs: "20px", md: "0px" },
                },
              }}
            >
              <Maintxt variant="h6" color="#835DFF">Quick Links</Maintxt>
              {navLinks.map((item) => (
                <Link
                  href={item.link}
                  underline="none"
                  color="inherit"
                  key={item.title}
                >
                  <Paragraph fontFamily="OpenSans" marginTop="0px" marginBottom="0px">
                    {item.title}
                  </Paragraph>
                </Link>
              ))}
            </Grid>
            <Grid
              container
              item
              md={2}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "start", md: "start" },
                marginTop: { xs: "20px", md: "0px" },
              }}
            >
              <Grid item>
                <Maintxt variant="h6"  color="#835DFF">Socials</Maintxt>
              </Grid>
              <Grid item display="flex" flexDirection="column" gap="5px">
                <WhiteLink href="https://twitter.com/shadownodeVPN" target="blank">
                  <Paragraph fontFamily="OpenSans" my="0px">
                    X
                  </Paragraph>
                </WhiteLink>
                <WhiteLink href="https://t.me/shadownodeVPN" target="blank">
                  <Paragraph fontFamily="OpenSans" my="0px">
                    Telegram
                  </Paragraph>
                </WhiteLink>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Blackbg>
          </Box>
    </>
  );
};

export default Summary;
