import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: -118.24838725055088,
    lng: 34.07806977033446, 
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCAA-KRaKjuFaCsZq8coXsp7Z_K6Q32rOA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        mapId="4504f8b37365c3d0"
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
