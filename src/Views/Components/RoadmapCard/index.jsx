import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { Img } from "../../Styles/Maintext.styles";
import RoadmapField from "../RoadmapFields";
import Paragraph from "../Paragraph";

const CardBox = styled(Box)`
  background: ${(props) => (props.bg ? props.bg : "transparent")};
  display: flex;
  /* width: 100%; */
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  justify-content: ${(props) => (props.jc ? props.jc : "start")};
  align-items: ${(props) => (props.ai ? props.ai : "start")};
  /* width: ${(props) => (props.mw ? props.mw : "100%")}; */
  min-height: ${(props) => (props.mw ? props.mw : "200px")};
  border-radius: 20px;
  gap: 10px;
  padding: ${(props) => (props.p ? props.p : "30px 20px")};
  border: none;
`;
const TitleBox = styled(Box)`
  background: ${(props) => (props.bgt ?  "#1B1821":"linear-gradient(110deg,#663CED 30%,#FFA5FD)" )};
  display: flex;
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};
  width: ${(props) => (props.mw ? props.mw : "30px")};
  min-height: ${(props) => (props.mw ? props.mw : "30px")};
  border-radius: 10px;
  gap: 10px;
  padding: ${(props) => (props.p ? props.p : "20px")};
  border: none;
`;
const RoadmapCard = (props) => {
  const { data, icon, title ,pending} = props;
  return (
    <CardBox>
      <TitleBox bgt={pending} sx={{}} marginBottom="20px">
        {/* <Img src={icon} mw="70px" alt="Logo" /> */}
        <Paragraph variant="h5" fontWeight="900" color="#fff">
          {title}
        </Paragraph>
      </TitleBox>
      {data?.map((item, index) => (
        <RoadmapField key={index} status={item.status} text={item.text} />
      ))}
    </CardBox>
  );
};

export default RoadmapCard;
