import React from 'react';
import { Grid ,Container} from '@mui/material';

import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import shadowBoxLogo from '../../../../assets/Images/newDesign/shadowBoxLogo.png'
import { Img } from '../../../Styles/Maintext.styles';
import zIndex from '@mui/material/styles/zIndex';

const End = () => {
    return (
        <Container data-aos="fade-up"  className='colordBox' maxWidth="lg" sx={{position:"relative",zIndex:"500",padding:{xs:"50px 30px"},width:{xs:"calc(100% - 64px)"}}}>
            <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} sm={8} md={6} display="flex" flexDirection="column" alignItems="center" gap="15px">
                    <Img w="100px"  src={shadowBoxLogo} alt="pic" style={{borderRadius:"12px",boxShadow:"0 0 50px #7E58FC"}} />
                    <Paragraph fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)">Protect Your Online <br />Privacy Today
                    </Paragraph>
                    <Paragraph maxWidth="500px" fontWeight="600">
                        Get started with our VPN service toady and safeguard your digital life from prying eyes
                    </Paragraph>
                    <PurpleButton  p="2px 30px"   href="#"   target="blank" sx={{position:"relative",zIndex:"9999"}}>Download Now</PurpleButton>
                </Grid>   
            </Grid>
        </Container>
    );
}
 
export default End;