import { Box, Grid } from '@mui/material'
import React from 'react'
import Paragraph from '../Paragraph'
import { Imagedata } from '../LockerMenu/styles'

const MapCards = (props) => {
  return (
    <Grid xs={12} sm={5.85} md={3.85} width="calc(100% - 80px)" display="flex" gap="10px 0" flexDirection="column" >
        <Box borderRadius="10px" sx={{background:"linear-gradient(to right, #835DFF,#6137EA)"}} padding={"0 30px"} width="calc(100% - 60px)" minHeight="100px" display="flex" justifyContent="start" alignItems="center" gap="10px">
            <Imagedata mw="50px" src={props?.location?.flag} /><Paragraph variant="h5" fontWeight="500">{props?.location?.country}</Paragraph>
        </Box>
        {
            props?.location?.city.map((city,index)=>(
                <Box bgcolor="#161616" key={index} borderRadius="10px" display="flex" gap="20px" justifyContent="space-between" alignItems="center"  padding={"0 30px"} width="calc(100% - 60px)" minHeight="100px">
                    <Paragraph variant="h5" fontWeight="500">{city.cityName}</Paragraph>
                    <Paragraph variant="body1" textAlign="right" color="#00ff85">{city.status}</Paragraph>
                </Box>
            ))
        }
    </Grid>
  )
}

export default MapCards 