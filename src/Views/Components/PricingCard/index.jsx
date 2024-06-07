import { Box, Typography } from '@mui/material'
import React from 'react'
import Paragraph from '../Paragraph'
import PurpleButton from '../PurpleButton'

const PricingCards = (props) => {
  return (
    <Box borderRadius="10px" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={""}  sx={{background:"#000"}} width="100%"border={props.b} {...props}>
        <Box  display="flex" flexDirection="column" alignItems="start" padding={"30px 20px"}>
            <Paragraph variant="h6" paddingBottom="20px" color="#6A40EF" textAlign="left">{props.pkgType}</Paragraph>
            <Paragraph variant="h5" paddingBottom="20px" fontWeight="500" color={props.c ? props.c : "#fff"}  textAlign="left">{props.pkgDuration}</Paragraph>

        </Box>
        <Paragraph variant="h3" fontWeight="500" color={"#fff"} padding="20px" textAlign="left">{props.pkgAmopunt}<Typography variant='body1' component={"span"}>{props.timepr}</Typography></Paragraph> 
        <PurpleButton href="https://app.shadownode.org/" sx={{background:`${props.btnbg}`, border:`${props.btnborder}`, margin:"10px 0px 30px"}}>  
            Buy Now
        </PurpleButton>
    </Box>
  )
}

export default PricingCards