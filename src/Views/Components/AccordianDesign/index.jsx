import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { StyledAccordian} from '../../Styles/Maintext.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paragraph from '../Paragraph';
import Mediumtxt from '../Mediumtxt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function BasicAccordion(props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = () => () => { 
      setExpanded(!expanded);
    };
  return (
    <div >
      <StyledAccordian onChange={handleChange()} sx={{marginTop: expanded?"30px !important":"0px"}}>
        <AccordionSummary
        expandIcon={expanded ? <RemoveIcon  sx={{fontSize:"20px"}} />: <AddIcon sx={{fontSize:"20px"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
            <Paragraph textAlign="left" my="0px" fontFamily="PoppinsM" >{props.def1}</Paragraph>
        </AccordionSummary>
        <AccordionDetails>
          <Paragraph textAlign="left" my="0px" sx={{marginRight:{xs:"0px", md:"0px"}, fontWeight:'400'}}>
            {props.def2} 
          </Paragraph>
        </AccordionDetails>
      </StyledAccordian>
    </div>
  );
}