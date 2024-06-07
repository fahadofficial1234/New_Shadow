import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { MenuItem, ListItemIcon } from '@mui/material';

import "./menustyle.css";
import usa from "../../../assets/Images/flags/united-states-of-america.png"
import canada from "../../../assets/Images/flags/canada.png"
import australia from "../../../assets/Images/flags/australia.png"
import uk from "../../../assets/Images/flags/united-kingdom.png"
import netherlands from "../../../assets/Images/flags/netherlands.png"
import germany from "../../../assets/Images/flags/germany.png"
import singapore from "../../../assets/Images/flags/singapore.png"
import india from "../../../assets/Images/flags/india.png"
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

const ServerList = [
  {
      country : "United States",
      flag:usa,
      city : "New York"
  },{
    country : "United States",
    flag:usa,
    city : "San Francisco"
  },{
      country : "Canada",
      flag:canada ,
      city : "Toronto"
  },{
      country : "Australia",
      flag:australia ,
      city : "Sydney"
  },  {
      country : "United Kingdom",
      flag:uk,
      city : "London"
  },  {
      country : "Netherlands",
      flag:netherlands,
      city : "Amsterdam"
  },   {
      country : "Germany",
      flag:germany,
      city : "Frankfurt"
  },  {
      country : "Singapore",
      flag:singapore,
      city : "Singapore"
  },  
  {
      country : "India",
      flag:india,
      city : "Bangalore"
  },  
]

const LocationCard = (props) =>{
    return (
        <Box minHeight="50px" display="flex" justifyContent="start" alignItems="center" gap="10px">
            <ListItemIcon>
              <img alt='' style={{width:"45px",height:"27px"}}  src={props?.location?.flag_link_4x3} />
            </ListItemIcon>
            <Box>
              <Paragraph variant="body1" fontWeight="500">{props?.location?.country_name}</Paragraph>
              {/* <Paragraph variant="body2" fontWeight="500">{props?.location?.server_name}</Paragraph> */}
            </Box>
        </Box>
    );
}

const SelectNodeLocation = (props) =>{
const {location,setlocation ,selectedLocation,setselectedLocation,handleCityFilter,ServerList} =props
  const handleChange = (event,ServerList) => {
    const filteredData = ServerList.filter(item => item.country_name === event.target.value);
    handleCityFilter(filteredData[0].country_name)
    setlocation(event.target.value);
    
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
                  <MenuItem sx={{minHeight:"70px"}} key={index} value={location?.country_name} starticon={<img alt='' style={{width:"40px"}} src={location?.flag_link_4x3} />}>
                    <LocationCard location={location} />
                  </MenuItem>
              ))
          }
        </Select>
      </StyledForm>
    </Box>
  );
}

export default SelectNodeLocation;
