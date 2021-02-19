import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React from "react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const GoogleMaps = (props) => {
  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: -6.250106, lng: 106.525555 }}
    >
      <Marker
        position={{ lat: -6.250106, lng: 106.525555 }}
        title="Suta & Hanny's Wedding"
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})(GoogleMaps);
