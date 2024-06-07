"use client";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import logo from "../../../../assets/Images/logo.png";
import MainIcon from "../../../../assets/Images/MainIcon.png";
import { MenuLink, MobileMainMenu, DrawerBox, DrawerDivider, MenuButton, Imagedata } from "../styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";

const MobileMenu = (props) => {
  const [state, setState] = useState({ left: false });
  
  const toggleDrawer = (anchor, open) => (event) => {
    // console.log('thest: ', anchor + " : " +open)
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ){return;}
    setState({ ...state, [anchor]: open });
  };
  return (
    <MobileMainMenu>
      <MenuLink href="/" p="15px 0 15px">
        <Imagedata src={logo} alt=""  mw="150px" />
      </MenuLink>
      <MenuButton onClick={toggleDrawer("left", true)}>
        {state["left"] ? (
          <CloseIcon sx={{color:"#fff"}}/>
        ) : (
          <MenuIcon sx={{color:"#fff"}}/>
        )}
      </MenuButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <DrawerBox
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <DrawerDivider>
            <MenuLink href="/">
              <Imagedata src={MainIcon}  alt="" mw="50px" />
              <Typography fontFamily="OpenSans" variant="h6">
                Shadow Node
              </Typography>
            </MenuLink>
            <Divider sx={{width:"100%",height:"2px", background:"#6137EA"}}/>
            <List>
              {props.menuList.map((value, i) => <MenuLink key={i} href={value.link}  Zidex={value.zindex} target={value.target} className={value.customClass + " d-block"}>{value.title}</MenuLink>)}
            </List>
          </DrawerDivider>
        </DrawerBox>
      </Drawer>
    </MobileMainMenu>
  );
}

export default MobileMenu;

