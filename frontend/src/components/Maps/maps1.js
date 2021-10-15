// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, Marker,useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = [{
    // lat:42.3601,
    // lng:-71.0589
  lat: parseFloat("42.3601"),
  lng: parseFloat("-71.0589")
},{ lat: parseFloat("40.3601"),
lng: parseFloat("-72.0589")}];


const Maps = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });



 
  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center[0]}
          zoom={8}>
          {/* <Marker position={{ lat: center[1].lat, lng: center[1].lng }} /> */}
          <Marker position={{ lat: center[0].lat, lng: center[0].lng }} />
          </GoogleMap>
        
      )}
    </>
  );
};

export default React.memo(Maps);

