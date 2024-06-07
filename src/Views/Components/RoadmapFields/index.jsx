import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Paragraph from "../Paragraph";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const FieldBox = styled(Box)`
  background: transparent;
  display: flex;
  width: calc(100% - 20px);
  gap:5px;
  // flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  justify-content: ${(props) => (props.jc ? props.jc : "start")};
  align-items: ${(props) => (props.ai ? props.ai : "start")};
  /* width: ${(props) => (props.mw ? props.mw : "100%")}; */
  // border: 1px solid #c5f250;
  /* min-height: ${(props) => (props.mw ? props.mw : "200px")}; */
  border-radius: 10px;
  padding: ${(props) => (props.p ? props.p : "5px 10px")};
`;
const RoadmapField = (props) => {
  const { status, text } = props;
  return (
    <FieldBox status={status}>
      <CheckBoxOutlinedIcon sx={{color:`${status? "#3CED9A":"#AFAFAF"}`,}}/>
      <Paragraph textAlign="left" variant="body2" >
        {text}
      </Paragraph>
    </FieldBox>
  );
};

export default RoadmapField;
