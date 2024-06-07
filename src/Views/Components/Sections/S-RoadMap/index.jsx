import styled from "@emotion/styled";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Paragraph from "../../Paragraph";
import RoadmapCard from "../../RoadmapCard";

const OuterContinerWraper = styled(Container)`
  width: 100%;
  min-height: 80vh;
  padding-top: 50px;
  padding-bottom: 70px;
  background-image: url("./RoadmapBg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 699px) {
    background-position: right;
  }
`;
const GridWraper = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  border: 1px solid #c5f250;
  background-color: #1d1d21;
  /* flex-direction:column; */
  justify-content: start;
  align-items: start;
  padding: 20px;
  border-radius: 20px;
`;
const ContinerWraper = styled(Container)`
  width: 100%;
  border-radius: 20px;
  /* padding: 10px 0 0 !important; */
  margin-top: 30px;
`;
const InnerGrid = styled(Grid)`
  background: #161616;
  width: 100%;
  border-radius: 20px;
  padding: 30px;
  margin-top: 30px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  @media (max-width: 599px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
`;
const ContractDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 20px;
  @media (max-width: 899px) {
    width: 100%;
  }
`;
const Div1 = styled.div`
  width: 25%;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Q1 = [
  {
    text: "Staking v1",
    status: "done",
  },
  {
    text: "Partnerships",
    status: "done",
  },
  {
    text: "Platform expansion",
    status: "done",
  },
  {
    text: "Cloud service partnerships",
    status: "done",
  },
  {
    text: "Community engagement",
    status: "done",
  },
  {
    text: "Privacy enhancements",
    status: "done",
  },
  {
    text: "Advanced routing options",
    status: "done",
  },
  {
    text: "Decentralized Domain Name System (DDNS)",
    status: "done",
  },
];
const Q2 = [
  {
    text: "Free mobile apps",
    status: "done",
  },
  {
    text: "Staking v2 rollout",
    status: "done",
  },
  {
    text: "Advertiser onboarding",
    status: "done",
  },
  {
    text: "Node staking upgrade",
    status: "",
  },
  {
    text: "Application design and structure",
    status: "",
  },
  {
    text: "Decentralized storage integration",
    status: "",
  },

  {
    text: "Cross-platform compatibility",
    status: "",
  }
];
const Q3 = [
  {
    text: "NFT contract development",
    status: "",
  },
  {
    text: "Gasless blockchain implementation",
    status: "",
  },
  {
    text: "Node stress testing",
    status: "",
  },
  {
    text: "Mobile app development",
    status: "",
  },
  {
    text: "Governance mechanism",
    status: "",
  },
  {
    text: "NFT-powered marketplace",
    status: "",
  },
  {
    text: "Integration with Web3",
    status: "",
  },
];

const Q4 = [
  {
    text: "User feedback integration",
    status: "",
  },
  {
    text: "Node provider expansion",
    status: "",
  },
  {
    text: "Partnerships",
    status: "",
  },
  {
    text: "Incentive mechanisms",
    status: "",
  },
  {
    text: "Localized exit nodes",
    status: "",
  },
  {
    text: "Security audits",
    status: "",
  },
];
const RoadmapSection = () => {
  return (
    <OuterContinerWraper maxWidth="xxl" data-aos="fade-up" id="roadmap"  sx={{padding:{xs:"0px"}}}>
      <ContinerWraper sx={{position:"relative",zIndex:"500"}}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Paragraph
              variant="h4"
              textAlign="center"
              color="#fff"
              padding="10px 0 0px" 
              fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)"
            >
              Roadmap
            </Paragraph>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop="20px"
          gap="20px 0"
          display="flex"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={5.9} md={2.9}>
            <RoadmapCard data={Q1} title="Q1" pending={false} />
          </Grid>
          <Grid item xs={12} sm={5.9} md={2.9}>
            <RoadmapCard data={Q2} title="Q2" pending={false} />
          </Grid>
          <Grid item xs={12} sm={5.9} md={2.9}>
            <RoadmapCard data={Q3} title="Q3" pending={true} />
          </Grid>
          <Grid item xs={12} sm={5.9} md={2.9}>
            <RoadmapCard data={Q4} title="Q4" pending={true} />
          </Grid>
        </Grid>
      </ContinerWraper>
    </OuterContinerWraper>
  );
};

export default RoadmapSection;
