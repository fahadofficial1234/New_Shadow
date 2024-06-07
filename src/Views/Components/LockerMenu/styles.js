"use client";
import styled from "@emotion/styled";
import { Box, Button, Container, Link } from "@mui/material";
import Switch from "@mui/material/Switch";

const DesktopMainMenu = styled(Container)`
  /* margin-top: 10px; */
  padding: 15px 0 15px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 1220px) {
    display: none;
  }
`;
const Imagedata = styled.img`
  width: 100%;
  max-width: ${ (props) => props.mw? props.mw: '100px'};
`;
const MobileMainMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 1221px) {
    display: none;
  }
`;
const SiteLogo = styled.img`
  max-width: 100%;
  height: auto;
`;
const MenuLink = styled(Link)`
  font-size: 14px;
  font-family: "OpenSans";
  color: #fff;
  text-decoration: none;
  padding: ${ (props) => props.p? props.p: '0 20px'};
  cursor: pointer;
  transition-duration: 0.5s; 
  z-index:${(props) => props.idex};

  &:hover, &:active, &:focus {
    color: #ffffff;
    transition-duration: 0.5s;
  }
  @media (max-width: 1220px) {
    display: block;
    padding: ${ (props) => props.p? props.p: '15px 0 15px 0px'};
    text-align: center;
  }
`;

const DrawerBox = styled(Box)`
  width: 250px;
  background: #000;
  min-height: calc( 100dvh - 20px );
  text-align: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const DrawerDivider = styled.div``

const MenuButton = styled(Button)`
  background: #6137EA;
  width: 30px !important;
  height: 30px !important;
  min-width: 30px;
  :hover{
    background: #6137EA;
  }
`;

const Humburgger = styled.span`
  background: #6137EA;
  height: 24px;
  width: 30px;
  color: #000000;
  font-size: 5px;
  position: relative;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 4px solid #6137EA;
  border-bottom: 4px solid #6137EA;

  &::after,&::before{
    content: 'menu';
    background: #000;
    display: block;
    height: 9px;
    width: 100%;
    color: #000;
  }

`;
const HumburggerClose = styled.span`
  height: 35px;
  width: 35px;
  color: transparent;
  font-size: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::after,&::before{
    content: 'menu';
    background: #6137EA;
    display: block;
    height: 6px;
    width: 100%;
    color: #6137EA;
    position: absolute;
  }
  &::before{ transform: rotate(-45deg) translate(-8px, 8px); top: 3px;}
  &::after{ transform: rotate(45deg) translate(-12px, -12px); bottom: -3px; }

`;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.switchColor,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));


export { DesktopMainMenu, MobileMainMenu, MenuLink, SiteLogo, DrawerBox, DrawerDivider, MenuButton, Humburgger, HumburggerClose, MaterialUISwitch,Imagedata };
