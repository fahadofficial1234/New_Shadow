import React from 'react' 
import stylded from '@emotion/styled'; 
import Paragraph from '../../Paragraph';
import {  Container } from '@mui/material';


const Footer = () => {
     


  return ( 
    <Container  maxWidth="lg" data-aos="fade-up" sx={{position:"relative",zIndex:"500",paddingBottom:"10px",paddingTop:"10px",paddingLeft:{xs:"30px",sm:"16px",md:"16px",lg:"16px"},paddingRight:{xs:"30px",sm:"16px",md:"16px",lg:"16px"}}}> 
        <Paragraph variant="body2" sx={{textAlign:"justify",opacity: "0.5" }} > 
        Shadow Node and related logos are trademarks of Shadow Node Inc., or its Affiliates. The views or opinions expressed do not necessarily reflect those of Shadow Node and are for informational purposes only. The content may rely on third-party sources, and we make no warranties about its accuracy or completeness. We do not accept liability for any financial losses resulting from using the information provided. Nothing on our site constitutes a solicitation or offer. Prices displayed are illustrative, and actual prices may vary. None of the content should be construed as financial advice. Reliance on the content is at your own risk. Conduct your own research and consult with a qualified financial advisor before making investment decisions. Investing in securities or cryptocurrencies carries risks, including the potential loss of capital.
        </Paragraph>
    </Container>
  )
}

export default Footer