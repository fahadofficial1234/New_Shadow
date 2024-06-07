import React from 'react';
import { Grid ,Container, styled, Box} from '@mui/material';
import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import multipleincomBg from '../../../../assets/Images/newDesign/multipleincomBg.png'
import rotateLogo from '../../../../assets/Images/newDesign/rotateLogo.png'
import Laptop from '../../../../assets/Images/newDesign/Laptop.png'
import { Img } from '../../../Styles/Maintext.styles'; 
import zIndex from '@mui/material/styles/zIndex';


const Blackbg = styled(Box)`
    background-image: url(${multipleincomBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 50px 0; 
    ` 
// const Gridimg = styled.img`
//     width : 100%; 
//     @media(max-width:599px){  
//         width : 85% !important;
//     }
// ` 

// const Gridimg2 = styled.img`
//     width : 100%; 
//     @media(max-width:599px){  
//         width : 85% !important;
//     }
// `
const MultipleIncome = () => {
    return (
        <Blackbg>
            <Container maxWidth="lg" data-aos="fade-up"  id="passiveincome"   sx={{padding:{xs:"50px 30px", lg:"50px",position:"relative",zIndex:"500"}}}>
                <Grid container display="flex" justifyContent="center" gap="30px 0">
                    <Grid item xs={12}>
                        <Paragraph  fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" >Multiple Passive Income Streams</Paragraph>
                        <Paragraph >Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Paragraph>
                    </Grid>
                    <Grid className='colordBox' container item xs={12} padding="50px" gap={{xs:"30px"}}>
                        <Grid item xs={12} sm={8} display="flex" flexDirection="column" alignItems="start" gap="20px 0">
                            <Paragraph textAlign="left" variant="h5" fontSize="clamp(1.5rem, 1.3214rem + 0.8929vw, 2.125rem)" fontFamily="PoppinsB">Staking</Paragraph>
                            <Paragraph textAlign="left" variant="body1" maxWidth="500px">
                                Earn rewards by staking your SVPN tokens with Shadow Node. Our staking program provides passive income to our users while supporting a robust and resilient VPN service.
                            </Paragraph>
                            <PurpleButton sx={{minWidth:"150px !important",background:"transparent !important",border:"1px solid #fff",zIndex:"999"}} href="">Stake Now</PurpleButton>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Img  w="100%" small_w="85%"  src={rotateLogo} alt="pic"/> 

                        </Grid>
                    </Grid> 
                    <Grid className='colordBox' container item xs={12}  padding="30px 50px">
                        <Grid item xs={12} sm={6}> 
                            <Img w="100%" small_w="105% !important"  src={Laptop} alt="pic" />
                        </Grid>
                        <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="start" gap="20px 0">
                            <Paragraph textAlign="left" variant="h5" fontFamily="PoppinsB">Become Node Provider</Paragraph>
                            <Paragraph textAlign="left" variant="body1" >
                            As a node provider you play a crucial role in maintaining our decentralized infrastructure. By running your own node, you help enhance network security and performance while earning rewards.
                            </Paragraph>
                            <PurpleButton sx={{minWidth:"150px !important",background:"transparent !important",border:"1px solid #fff" ,zIndex:"999"}} href="">Provide Node</PurpleButton>
                        </Grid>
                    </Grid>   
                </Grid>
            </Container>
        </Blackbg>
    );
}
 
export default MultipleIncome;