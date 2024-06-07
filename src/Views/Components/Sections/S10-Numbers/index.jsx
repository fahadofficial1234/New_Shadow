import { Container, Grid } from '@mui/material';
import React from 'react'
import Maintxt from '../../Maintxt';
import Paragraph from '../../Paragraph';

const  Number_Sec = () => { 


  return (
    <Container data-aos="fade-up" maxWidth="lg" sx={{padding:{xs:"70px 0px",lg:"100px 0px"},position:"relative",zIndex:"500"}}>
                <Maintxt textAlign="center" fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" margin= {{xs:"0px 0 50px",lg:"0px 0 50px "}}>Numbers</Maintxt>
            <Grid container sx={{display:"flex",flexDirection:{xs:"column",md:"row",lg:"row"},gap:"30px 0",margin:"0px 0 50px", justifyContent:{xs:"center"},alignItems:{xs:"center"}}}>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:{xs:"column",lg:"column"},justifyContent:{xs:"center" ,lg:"start"},alignItems:{xs:"center" ,lg:"start"},gap:"5px"}}>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h2" fontWeight="500" >
                      4000+
                    </Paragraph>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h6">
                      $SVPN Holders 
                    </Paragraph>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:{xs:"center" ,sm:"start"},alignItems:{xs:"center" ,sm:"start",md:"start",lg:"start"},gap:"5px"}}>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h2" fontWeight="500">
                      234
                    </Paragraph>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h6">
                      Premium Subscription
                    </Paragraph>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:{xs:"center",sm:"start",md:"start" ,lg:"start"},alignItems:{xs:"center" ,sm:"start",md:"start",lg:"start"},gap:"5px"}}>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h2" fontWeight="500">
                      3,000+
                    </Paragraph>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h6">
                      Free App Downloads
                    </Paragraph>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:{xs:"center" ,sm:"start",md:"start",lg:"start"},alignItems:{xs:"center" ,sm:"start",md:"start",lg:"start"},gap:"5px"}}>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h2" fontWeight="500">
                    $3.3M+
                    </Paragraph>
                    <Paragraph textAlign={{xs:"center",lg:"left"}} variant="h6">
                    Total Value Locked
                    </Paragraph>
                  </Grid>
                </Grid>
            </Container>
  )
}

export default Number_Sec;