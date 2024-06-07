import React from "react";
import logo from "../../../../assets/Images/logo.png";
import { DesktopMainMenu,  Imagedata,  MenuLink } from "../styles";
import styled from "@emotion/styled";
 const Div = styled.div`

 `
const DesktopMenu = (props) => {
 
  return (
    <DesktopMainMenu maxWidth="lg">
      <MenuLink href="/" p="0px">
        <Imagedata src={logo} mw="195px" alt="Logo" />
      </MenuLink>
      <Div style={{display:"flex" , alignItems:"center", width: '100%', justifyContent: 'right',}}>
        {props.menuList.map((value, i) => <MenuLink  p={value.p} Zidex={value.idex} key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink> )}
      </Div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;
