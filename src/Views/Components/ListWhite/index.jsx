import { Grid } from "@mui/material";
import React from "react";
import Mediumtxt from "../Mediumtxt";
import Paragraph from "../Paragraph";
import check from "../../../assets/Images/check.png";
const ListWhite = (props) => {
  const {arr} = props;
  return (
    <Grid item md={3} xs={12}>
      <Mediumtxt
        textAlign="left"
        borderBottom={props.defg ? "4px dashed #19FA9C" : "4px dashed white"}
        color={props.defg ? "#19FA9C" : "white"}
        marginBottom={3}
        padding={2}
      >
        {props.children}
      </Mediumtxt>
      <>
        {arr.map((item) => (
          typeof(item) == "object" ? (
            <Paragraph
            key={item.text}
            variant="subtitle1"
            marginTop={1}
            color="#19FA9C"
            display="flex"
            alignItems="center"
            gap={1}
            >
              - {item.text}{" "}
              <img src={check} alt="green check" width="18px" height="18px" />
            </Paragraph>
          ) : (
            <Paragraph  key={item} variant="subtitle1" marginTop={1}>
            
              - {item}
            </Paragraph>
          )
        ))}
      </>
    </Grid>
  );
};

export default ListWhite;
