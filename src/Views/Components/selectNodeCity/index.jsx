import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { MenuItem, ListItemIcon } from '@mui/material';

import "./menustyle.css";
import Paragraph from '../Paragraph';

const StyledForm = styled(FormControl)`
    &>.MuiInputBase-root{
        color:#c51111 !important;
        border-radius: 10px !important;
        background: #272727;
        border: none !important;
        outline: none !important;
        height: 50px;
        &>.MuiSvgIcon-root{
            color: #835DFF !important;
        }
    }

`


const LocationCard = (props) =>{
    return (
        <Box minHeight="50px" display="flex" justifyContent="start" alignItems="center" gap="10px">
            {/* <ListItemIcon>
              <img alt='' width={55} height={35} src={props?.location?.flag_link_4x3} />
            </ListItemIcon>
            <Box> */}
              {/* <Paragraph variant="body1" fontWeight="500">{props?.location?.country_name}</Paragraph> */}
              <Paragraph variant="body2" fontWeight="500">{props?.location?.server_name}</Paragraph>
            {/* </Box> */}
        </Box>
    );
}

const SelectNodeCity = (props) =>{
const {location,setlocation ,setServerProvider,setselectedLocation,ServerList} =props

  const handleChange = (event,ServerList) => {
    const filteredData = ServerList.filter(item => item.ip === event.target.value);
    setlocation(event.target.value);
    
    setServerProvider(filteredData[0].server_provider)
    const [latitude, longitude] = filteredData[0].coordinates.split(",").map(coord => parseFloat(coord));

    const coordinates = { lat:latitude, lng:longitude };
    setselectedLocation(coordinates)
  };

  return (
    <Box sx={{ width: "100%"}}>
      <StyledForm fullWidth>
        <Select
          value={location}
          onChange={(event)=>{handleChange(event,ServerList)}}
        >
          {
              ServerList?.map((location, index) => (
                  <MenuItem sx={{minHeight:"70px"}} key={index} value={location?.ip}>
                    <LocationCard location={location} />
                  </MenuItem>
              ))
          }
        </Select>
      </StyledForm>
    </Box>
  );
}

export default SelectNodeCity;
