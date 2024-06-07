import React, { useEffect, useState } from 'react';
//import Marquee from "react-fast-marquee";
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/Image1.png";
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/Image2.png";
import Cardimg from '../../Cardimg';
import {motion} from 'framer-motion';
import MapCards from '../../mapCards';
import usa from "../../../../assets/Images/flags/united-states-of-america.png"
import canada from "../../../../assets/Images/flags/canada.png"
import australia from "../../../../assets/Images/flags/australia.png"
import uk from "../../../../assets/Images/flags/united-kingdom.png"
import netherlands from "../../../../assets/Images/flags/netherlands.png"
import germany from "../../../../assets/Images/flags/germany.png"
import singapore from "../../../../assets/Images/flags/singapore.png"
import india from "../../../../assets/Images/flags/india.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMapComponent from '../../liveMaps';
import MapComponent from '../../maps files/Map';
import SearchLocationInput from '../../maps files/GooglePlcasesApi (1)';
import PurpleButton from '../../PurpleButton';
import { API_URL } from '../../../Constant';
import SelectNodeLocation from '../../selectNodeCountry';
import SelectNodeCity from '../../selectNodeCity';
const Blackbg = styled(Box)`
    background-color: ${(props) => props.noclr ? "transparent" : "#000"};
    /* overflow: hidden; */
    position:relative;
    z-index: 0;
    /* min-height:  ${(props) => props.noht ? "auto" : "100vh"} ; */
    /* scroll-snap-align:start; */
    `
const MotionCont = motion(Container)

const locationsData = [
    {
        country : "United States",
        flag:usa,
        city : [
            {
                cityName :  "New York",
                status:"online"
            },{
                cityName :  "San Francisco",
                status:"online"
            }
        ]
    },{
        country : "Canada",
        flag:canada ,
        city : [
            {
                cityName :  "Toronto",
                status:"online"
            }
        ]
    },{
        country : "Australia",
        flag:australia ,
        city : [
            {
                cityName :  "Sydney",
                status:"online"
            }
        ]
    },  {
        country : "United Kingdom",
        flag:uk,
        city : [
            {
                cityName :  "London",
                status:"online"
            }
        ]
    },  {
        country : "Netherlands",
        flag:netherlands,
        city : [
            {
                cityName :  "Amsterdam",
                status:"online"
            }
        ]
    },   {
        country : "Germany",
        flag:germany,
        city : [
            {
                cityName :  "Frankfurt",
                status:"online"
            }
        ]
    },  {
        country : "Singapore",
        flag:singapore,
        city : [
            {
                cityName :  "Singapore",
                status:"online"
            }
        ]
    },  
    {
        country : "India",
        flag:india,
        city : [
            {
                cityName :  "Bangalore",
                status:"online"
            }
        ]
    },  
]


const Locations = () => {
  
  const [Country, setCountry] = React.useState('');
  const [City, setCity] = React.useState('');
  const [CityIp, setCityIp] = React.useState('');
  const [ServerProvider, setServerProvider] = React.useState('');
  const [NodeCount, setNodeCount] = React.useState(0);
  const [NodeCityCount, setNodeCityCount] = React.useState(0);
  const [ServerList, setServerList] = React.useState([{}]);
  const [CountryList, setCountryList] = React.useState([{}]);
  const [CityList, setCityList] = React.useState([{}]);
  const [PremiumBuys, setPremiumBuys] = React.useState(234);
  const [AllUniqueCityCoordinates, setAllUniqueCityCoordinates] = React.useState([{}]);
  const [selectedLocation, setSelectedLocation] = useState({
  });
  const handleServerData = async () => {
    // console.log(requestData)
    const endPoint = "getServerData";
    const method = "GET";
    try {
      const response = await fetch(`${API_URL}${endPoint}`, {
        method,
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await response.json();
      // console.log("response", result);
      if (result?.message === "succes") {

      setServerList(result?.data)
      setNodeCount(result?.data.length)
      //UniqueCountries
       const uniqueServers = [];
       const addedCountries = new Set();
       result?.data.forEach(server => {
           if (!addedCountries.has(server.country_name)) {
               uniqueServers.push(server);
               addedCountries.add(server.country_name);
           }
       });
       setCountryList(uniqueServers)

      //UniqueCitiesCoordinates
      const allUniqueCity = [];
      const allAddedCity = new Set();
      result?.data.forEach(server => {
          if (!allAddedCity.has(server.server_name)) {
            const [latitude, longitude] = server?.coordinates.split(",").map(coord => parseFloat(coord));
            const coordinate = { lat:latitude, lng:longitude };
            allUniqueCity.push({name:server.server_name,coordinate:coordinate});
            allAddedCity.add(server.server_name);
          }
      });
      
      setAllUniqueCityCoordinates(allUniqueCity)
      setNodeCityCount(allUniqueCity.length)
       //UniqueCitiesOfACountry
       const selectedCountry = result?.data[0].country_name; // Replace "Country Name" with the actual selected country
       setCountry(selectedCountry)

        const uniqueCity = [];
        const addedCity = new Set();
        const selectedCountryServers = result?.data.filter(server => server.country_name === selectedCountry);
        selectedCountryServers.forEach(server => {
          if (!addedCity.has(server.server_name)) {
              uniqueCity.push(server);
              addedCity.add(server.server_name);
          }
        });
        setCity(selectedCountryServers[0].server_name)
        setCityIp(selectedCountryServers[0].ip)
        setServerProvider(selectedCountryServers[0].server_provider)
        setCityList(selectedCountryServers)
       const [latitude, longitude] = selectedCountryServers[0].coordinates.split(",").map(coord => parseFloat(coord));
       const coordinates = { lat:latitude, lng:longitude };
       setSelectedLocation(coordinates)
        
      }
    } catch (err) {
      setServerList([{}])
      // console.error(err);
    }
  };
  // const handleSubscribers = async () => {
  //   // console.log(requestData)
  //   const endPoint = "getData";
  //   const method = "GET";
  //   try {
  //     const response = await fetch(`${API_URL}${endPoint}`, {
  //       method,
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     });
  //     const result = await response.json();
  //     // console.log("response", result);
  //     if (result?.message === "succes") {
  //       setPremiumBuys(result?.data.length)
  //     }
  //   } catch (err) {
  //     setPremiumBuys(224)
  //     // console.error(err);
  //   }
  // };
  const handleCityFilter = (country) =>{
    const uniqueCity = [];
    const addedCity = new Set();
    
    const selectedCountryServers = ServerList.filter(server => server.country_name === country);
    selectedCountryServers.forEach(server => {
        if (!addedCity.has(server.server_name)) {
            uniqueCity.push(server);
            addedCity.add(server.server_name);
        }
    });
    setCityList(selectedCountryServers)
    setCityIp(selectedCountryServers[0].ip)
    setServerProvider(selectedCountryServers[0].server_provider)
    setCity(selectedCountryServers[0].server_name)
    const [latitude, longitude] = selectedCountryServers[0].coordinates.split(",").map(coord => parseFloat(coord));
    const coordinate = { lat:latitude, lng:longitude };
    setSelectedLocation(coordinate)
  }

  useEffect(()=>{
    handleServerData()
    // handleSubscribers()
  },[])
  
  
  
  
    return (
        <Blackbg noht id="locations">
            <Container  maxWidth="lg"  sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:"100px",paddingTop:{xs:"0px", md:"50px"} }}>
                <Maintxt textAlign="center" my={5}>Active Nodes Locations</Maintxt>
                <Grid container  gap="20px 15px" alignItems="start" justifyContent="start">
                  {/* <Grid item xs={12} >
                    <GoogleMapComponent/>
                  </Grid> */}
                    <Box sx={{  width: "100%",position:"relative",display:"flex",flexDirection:"column",gap:"20px" }}>
                      {/* <SearchLocationInput setSelectedLocation={setSelectedLocation} /> */}
                      <Box sx={{ width: {xs:"100%",sm:"calc(100% - 40px)"},maxWidth:"380px",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start", position:{xs:"relative",sm:"absolute"}, top:{xs:"none",sm:"20px"},left:{xs:"none",sm:"20px"},zIndex:"99999999999" }}>
                        <Box sx={{ padding:{xs:"5px 20px 10px",sm:"20px"},minHeight:"100px",maxHeight:"380px", width: {xs:"calc(100% - 40px)",sm:"calc(100% - 40px)"},borderRadius:"10px",background:"#161616" }}>
                          <Paragraph variant="body1" padding="10px 0 5px" color="#835DFF">
                            Country
                          </Paragraph>
                          <SelectNodeLocation location={Country} setlocation={setCountry} setselectedLocation={setSelectedLocation} handleCityFilter={handleCityFilter} ServerList={CountryList} />
                          <Paragraph variant="body1" padding="10px 0 5px" color="#835DFF">
                            City
                          </Paragraph>
                          <SelectNodeCity setServerProvider={setServerProvider} location={CityIp} setlocation={setCityIp} setselectedLocation={setSelectedLocation} ServerList={CityList} />
                          <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <Paragraph variant="body1" padding="10px 0 5px" color="#835DFF">
                              Server IP
                            </Paragraph>
                            <Paragraph variant="body1" padding="10px 0 5px">
                              {CityIp}
                            </Paragraph>
                          </Box>
                          <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <Paragraph variant="body1" padding="10px 0 5px" color="#835DFF">
                              Server Provider
                            </Paragraph>
                            <Paragraph variant="body1" padding="10px 0 5px">
                              {ServerProvider}
                            </Paragraph>
                          </Box>
                      </Box>
                      <Box sx={{ width: "100%",display:{xs:"flex",sm:"flex"},justifyContent:"space-between",alignItems:"start",paddingTop:"20px"}}>
                        <Box sx={{ padding:"20px",minHeight:"70px", width: {xs:"calc(48% - 40px)",sm:"calc(48% - 40px)"},display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px",borderRadius:"10px",background:"#161616"}}>
                          <Paragraph variant="body1"  color="#835DFF">
                            All Nodes
                          </Paragraph>
                          <Paragraph variant="body1" >
                            {NodeCount}
                          </Paragraph>
                        </Box>
                        <Box sx={{ padding:"20px",minHeight:"70px", width: {xs:"calc(48% - 40px)",sm:"calc(48% - 40px)"},display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px",borderRadius:"10px",background:"#161616"}}>
                          <Paragraph variant="body1"  color="#835DFF">
                            Node Cities
                          </Paragraph>
                          <Paragraph variant="body1" >
                            {NodeCityCount}
                          </Paragraph>
                        </Box>
                      </Box>
                    </Box>

                  <MapComponent AllUniqueCityCoordinates={AllUniqueCityCoordinates} selectedLocation={selectedLocation} />
                  </Box>
                    
                    
                </Grid>
                
            </Container>
            <Container maxWidth="xl">
                <Maintxt textAlign="center" margin="80px 0 50px">Numbers</Maintxt>
            <Grid container sx={{display:"flex",gap:"30px 0",margin:"0px 0 50px"}}>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>
                    <Paragraph textAlign="left" variant="h2" fontWeight="500" >
                      4000+
                    </Paragraph>
                    <Paragraph textAlign="left" variant="h6">
                      $SVPN Holders 
                    </Paragraph>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>
                    <Paragraph textAlign="left" variant="h2" fontWeight="500">
                      {PremiumBuys}
                    </Paragraph>
                    <Paragraph textAlign="left" variant="h6">
                      Premium Subscription
                    </Paragraph>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>
                    <Paragraph textAlign="left" variant="h2" fontWeight="500">
                      3,000+
                    </Paragraph>
                    <Paragraph textAlign="left" variant="h6">
                      Free App Downloads
                    </Paragraph>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{ width: "100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>
                    <Paragraph textAlign="left" variant="h2" fontWeight="500">
                    $3.3M+
                    </Paragraph>
                    <Paragraph textAlign="left" variant="h6">
                    Total Value Locked
                    </Paragraph>
                  </Grid>
                </Grid>
            </Container>
        </Blackbg>
           
    );
}
 
export default Locations;