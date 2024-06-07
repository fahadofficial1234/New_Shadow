import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Img } from '../../../../../Styles/Maintext.styles'; 
import { Box, Button, Link } from '@mui/material';
import Paragraph from '../../../../Paragraph'; 
import styled from '@emotion/styled'; 
 
const FlexBox =  styled(Box)` 
display:flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
gap:10px;
`
  export default function AvailabilityMenu(props) {  
   
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        sx={{ 
          display:"flex", 
          flexDirection: "column", 
          justifyContent: "center",
         alignItems: "center",  
        //  width:"50px",  
         width:{xs:"150px",lg:"157px"},
        //  minWidth:{xs:"30px !important",lg:"64px"},
         gap:{xs:"5px",lg:"10px"}, 
         ":hover" :{  
           backgroundColor:"transparent"
         } ,   
         padding:{xs:"6px 2px",lg:"6px 8px"},
         position:"relative",
         zIndex:"999", 
        }}
      >   
       <Img src={props.src} alt="images" w={props.w} small_w={props.small_w} style={{filter:`${open ?"none":"grayScale(1)"}`}} /> 
       <Paragraph variant="body2" fontSize="11px" fontWeight="600" textAlign="center" color="white">{props.name}</Paragraph>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
      {props.array.map((item) => (
     <Link
      href={item.link}
      target={item?.target}
      underline="none"
      color="inherit"
      key={item.title}
     >
          <MenuItem sx={{border:"1px solid #707070", borderRadius:"6px"}} onClick={handleClose}> 
           {item.title}
          </MenuItem>
     </Link>
     ))}
      </Menu>
    </div>
  );
}
