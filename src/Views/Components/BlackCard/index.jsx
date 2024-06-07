import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Paragraph from '../Paragraph';
import { OrangeText } from '../../Styles/Maintext.styles';



export default function BlackCard(props) {
  return (
    <Grid item md={3.8} xs={12}>
      <Card sx={{ minWidth: 100, backgroundColor:"black", borderRadius:"5px", marginTop:"20px", padding:"5px 12px"}}>
        <CardContent>
          <OrangeText fntsze="28px">{props.children}</OrangeText>
          <Paragraph mr={6}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Paragraph>
        </CardContent>
      </Card>

    </Grid>
  );
}