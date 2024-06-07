import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { List } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: transparent;
  backdrop-filter: blur(5px);
  z-index: 2;
`

export const StyledToolbar = styled(Toolbar)`
  justify-content:space-around;
  padding-left: 0px !important;
  padding-right: 0px !important;
  align-items: center;
  &>.MuiButtonBase-root{
    color: white;
  }
`

export const StyledTextOne = styled(Typography)`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  color: black;
  text-decoration: none;  
  filter: drop-shadow(1px 0px 0.5px rgba(0,0,0,0.42 ));
`

export const StyledTextTwo = styled(Typography)`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #0097d8;
  text-decoration: none;
  filter: drop-shadow(1px 0px 0.5px rgba(0,0,0,0.42 ));
`

export const StyledMenuDesign = styled(Menu)`
`

export const StyledList = styled(List)`
  a:nth-last-child(2){
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:8px;
      
    }
  }
  a:nth-last-child(1){
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:8px;
    }
  }
`
export const StyledList3 = styled(List)`
  a{
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:8px;
      
    }
  }
  & a{
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:8px;
    }
  }
  a:nth-last-child(3){
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:5px;
    }
  }
   a:nth-last-child(4){
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:8px;
    }
  }
   a:nth-last-child(5){
    &>.MuiButtonBase-root{
      margin-left: 15px;
      background: linear-gradient(180deg,#835DFF , #6137EA );
      
      border-radius: 5px; 
      padding:8px;
    }
  }

`

export const StyledButtonLink = styled(Button)`
  margin-top: 14px;
  margin-bottom: 14px;
  font-size: 14px;
  font-family:OpenSans;
  color:white;
  text-transform:capitalize;
  display: block;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0px;
  height: auto;
  padding: 1px 16px;
  &:hover{  
    color: ${(props) => props.hoverblue ? "white" : "#6015e4"};
    background-color: ${(props) => props.hoverblue ? "transparent" : "transparent"} ;
  }
  ::after{
    content: '';
    width: 0%;
    height: 2px;
    background: #0097D8;
    display: block;
    margin: auto;
    transition: 0.5s;
  }
  &:hover::after{
    width: ${(props) => props.hoverblue ? "100%" : "0%"} ;
  }
`

export const StyledButtonLink2 = styled(Button)`
  margin-top: 16px;
  margin-bottom: 16px; 
  font-size:  ${(props) => props.smldesgn ? "16px" : "40px"}; 
  height:43px;
  line-height: 0;
  font-weight: ${(props) => props.smldesgn ? "normal" : "bold"};
  font-family: serif;
  border: 1px solid white;
  border-radius: 5px;
  color:${(props) => props.clr === "black" ? "black" : "white"};
  text-transform:capitalize;
  display: block;
  background-color: ${(props) => props.btnclr ? props.btnclr : "transparent"}; 
  align-items: center;
  min-width: ${(props) => props.smldesgn ? "200px" : "45px"};
  &:hover{               
    color: #ffd803;
    background-color: #F9860B;
  }
`