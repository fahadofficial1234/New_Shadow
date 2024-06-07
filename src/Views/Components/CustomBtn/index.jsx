import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CustomBtn = styled(Button)`
  background: ${(props) => (props.bgc ? props.bgc : "linear-gradient(to right,#835DFF,#6137EA)")};
  font-size: ${(props) => (props.fs ? props.fs : "14px")};
  border-radius: ${(props) => (props.br? props.br: "10px")};
  width: ${(props) => (props.w ? props.w : "130px")};
  font-family: ${(props) => (props.fm ? props.fm : "PoppinsM")};
  margin: ${(props) => (props.m ? props.m : "0 5px")};
  padding: ${(props) => (props.p ? props.p : "4px 16px")};
  color: ${(props) => (props.c ? props.c : "#fff")};
  border: ${(props) => (props.b ? props.b : "none")};
  transition: 0.5s;
  text-transform: capitalize;
  z-index: 1;
  box-shadow: none;
  & .Mui-disabled {
    color: #707070 !important;
    border-color: #707070 !important;
    background:  #979797 !important;
    cursor: not-allowed !important;
    z-index: 2;
  }
  :hover {
  box-shadow: none;
  }
  @media (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "6px 5px")};
    margin: ${(props) => ( props.m599 )};
    font-size: ${(props) => (props.fs599 ? props.fs599 : "12px")};
  }
`;

const CustomButton = (props) => {
  const { children } = props;
  return (
    <CustomBtn variant="filled" {...props}>
      {children}
    </CustomBtn>
  );
};

export default CustomButton;
