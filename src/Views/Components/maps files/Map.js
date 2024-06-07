import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF, useJsApiLoader } from "@react-google-maps/api";
import {  mapOptions } from "../../Constant";
import marker from "../../../assets/Images/location_marker1.png"
import mapTheme from "./mapConfigure";
import Paragraph from "../Paragraph";

const MapComponent = ({ selectedLocation ,AllUniqueCityCoordinates}) => {
  const [selectedMarker, setSelectedMarker] = useState("")
  const { isLoaded, loadError } = useLoadScript({
    id:"AIzaSyDdcPa9dACodW8asrjAb3V6zv9MPgvdDfM",
    googleMapsApiKey: "AIzaSyDdcPa9dACodW8asrjAb3V6zv9MPgvdDfM",
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";
 
 
  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={{
          height: "calc(100vh - 60px)",
          borderRadius:"10px",
        }}
        center={selectedLocation}
        zoom={11}
        onLoad={onMapLoad}
        options={{
            backgroundColor:"#272727",
            disableDefaultUI:true,
            styles:mapTheme
          
        }}
        onClick={()=>{
          setSelectedMarker("")
        }}

      >
        {
            AllUniqueCityCoordinates.map((mark)=>(
                <MarkerF
                  options={{
                      Size:"10px"
                  }}
                  position={mark.coordinate}
                  icon={marker}
                  animation={2}
                  onClick={()=>{setSelectedMarker(mark)}}
                />
            ))
        }
        
        
        {
          selectedMarker &&
          <InfoWindowF position={selectedMarker.coordinate} options={{
            pixelOffset:new window.google.maps.Size(0,-50)
          }} onCloseClick={()=>setSelectedMarker("")}>
            <Paragraph variant="h6" fontWeight="500" padding="0" >
                {selectedMarker.name}
            </Paragraph>
          </InfoWindowF>
        }
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
