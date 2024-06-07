import { Container, styled } from "@mui/material";
import React from "react";
import DesktopMenu from "./component/DesktopMenu";
import MobileMenu from "./component/MobileMenu";
import CustomButton from "../CustomBtn";
import { Imagedata } from "./styles";
import mexc from "../../../assets/Images/mexc.png"
import PurpleButton from "../PurpleButton";

const MainMenu = styled(Container)`
  background: linear-gradient(to right, rgba(9, 9, 9,.12),rgb(0, 0, 0,.12));
  backdrop-filter:blur(10px);
  border:1px solid #131313;
  border-radius:10px; 
  backdrop-filter: blur(10px); 
  margin-top:10px;
  /* backdrop-filter: blur(10px); */
`;
const LockerMenu = (props) => {
  const menuList = [
    // You can pass 4 perameters for menu title, link, target and customClass
    {
      title: "About",
      link: "#about", 
      zindex : "109999"
    },
    {
      title: "Features",
      link: "#features",  
      zindex : "109999"
    },
    {
      title: "Passive Income",
      link: "/passiveincome", 
      zindex : "109999",
    },
    {
      title: "Pricing",
      link: "/#pricing", 
      zindex : "109999",
    },
    {
      title: "Tokenomics",
      link: "/#tokenomics", 
      zindex : "109999",
    },
    {
      title: "White Label",
      link: "https://shadownode.org/whitelabel", 
      zindex : "109999",
    }, 
    {
      title: "White Paper",
      link: "https://shadownode.gitbook.io/shadow-node-white-paper", 
      zindex : "109999",
    },
    // {
    //   title: "Whitepaper",
    //   link: "https://shadownode.gitbook.io/shadow-node-white-paper",
    // },
    // {
    //   title: "Staking",
    //   link: "https://app.shadownode.org/stake",
    // },
    // {
    //   title: <CustomButton>Download</CustomButton>,
    //   link: "/download",
    //   p:"0 0px 0 20px"
    // },
    {
      title: <PurpleButton href="" p="2px 20px" target="blank">Dashboard</PurpleButton>,
      link: "",
      p:"0 8px 0 5px"
    },
  ];
  return (
    <MainMenu maxWidth="lg" data-aos="fade-down">
      <DesktopMenu menuList={menuList} />
      <MobileMenu menuList={menuList} />
    </MainMenu>
  );
};

export default LockerMenu;
