import React from "react";
import { Container, Grid, Link} from "@mui/material";
import {
  Blackbg,
} from "../../../Styles/Maintext.styles";
import Maintxt from "../../Maintxt";
import Paragraph from "../../Paragraph";
import Doubletxt from "../../Doubletxt";
import TwitterIcon from "../../../../assets/Images/Twitter.png";
import SendIcon from "../../../../assets/Images/Send.png";
import BarIcon from "../../../../assets/Images/baricon.png";
import RecIcon from "../../../../assets/Images/recticon.png";
import UniIcon from "../../../../assets/Images/unicorn.png";
import { StyledButtonLink, StyledList3 } from "../../../Styles/Navbar.styles";
import { motion } from "framer-motion";
const MotionCont = motion(Container);

const navLinks = [
  {
    title: <img src={BarIcon} alt="bar icon" width={18} height={18}></img>,
    link: "https://etherscan.io/address/0xc668695dcbcf682de106da94bde65c9bc79362d3",
    target:"blank"
  },
  {
    title: <img src={RecIcon} alt="rect icon" width={18} height={18}></img>,
    link: "https://www.dextools.io/app/en/ether/pair-explorer/0x1686f2a47709eb4cd6d0f1bf48468aac7d68da75?t=1710352969313",
    target:"blank"
  },
  {
    title: <img src={UniIcon} alt="unicorn icon" width={25} height={25}></img>,
    link: "https://app.uniswap.org/swap?outputCurrency=0xc668695dcbcf682de106da94bde65c9bc79362d3&chain=ethereum",
    target:"blank"
  },
  {
    title: <img src={SendIcon} alt="send icon" width={18} height={18}></img>,
    link: "https://t.me/shadownodeVPN",
    target:"blank"
},
{
    title: <img src={TwitterIcon} alt="x icon" width={18} height={18}></img>,
    link: "https://twitter.com/shadownodeVPN",
    target:"blank"
  },
];
const Tokenomics = () => {
  return (
    <Blackbg noclr id="tokenomics" style={{padding:"10px"}}>
      {/* <Motionimg
        tp="21%"
        initial={{ x: "50%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src={Purplebg2}
        alt="purple pic"
      /> */}
      <MotionCont
        maxWidth="xl"
        initial={{ y: "20%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        // padding="0 !imoportant"
        
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "100px",
          paddingTop: { xs: "50px", md: "100px" },
          marginTop:"30px",
          background:"rgba(6,6,6,.84)",
          border:"1px solid #4F36A3",
          borderRadius:"10px"
        }}
      >
        <Maintxt
          textAlign="center"
          my="0px"
          sx={{ marginTop: "0" }}
        >
          Tokenomics
        </Maintxt>
        <Grid
          container
          marginTop="70px"
          justifyContent="center"
          gap={2}
          alignItems="center"
        >
          <Grid container item xs={12} md={11} justifyContent="space-evenly">
            <Doubletxt def1="Shadow Node" def2="Name" />
            <Doubletxt def1="$SVPN" def2="Symbol" />
            <Doubletxt def1="1,000,000,000" def2="Supply" />
            <Doubletxt def1="4/4" def2="Buy/Sell Tax" />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            borderRadius="5px"
            px={3}
            py={1}
            marginTop={2}
            sx={{
              background:
                "#060606",
            }}
          >
            <Paragraph fontFamily="OpenSans" my={1}>
              4% tax on each buy/sell.
            </Paragraph>
            <Paragraph fontFamily="OpenSans" my={1}>
              50% for Marketing
              <br />
              50% for Development
            </Paragraph>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            borderRadius="5px"
            display="flex"
            justifyContent="space-between" 
            gap="10px"
            px={3}
            py={1}
            sx={{
              background:
                "linear-gradient(180deg,#835DFF , #6137EA )",
            }}
          >
            <Paragraph fontFamily="RSb" my="0px">
              Contract address:
            </Paragraph>
            <Paragraph fontFamily="RSb" my="0px" textAlign="right" sx={{wordBreak:'break-all'}}>
             0xc668695dcbcf682de106da94bde65c9bc79362d3
            </Paragraph>
          </Grid>
     
        </Grid>
      </MotionCont>
    </Blackbg>
  );
};

export default Tokenomics;
