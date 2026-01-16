"use client";
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./style.scss";
import SectionTitle from "../Title";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 51.0874451,
  lng: -113.9857614,
};

const Map = ({ className = "", fullWidth = true }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="mapContainer">
    
      <div className={`${className} ${fullWidth ? "w-100" : ""}`}>
         
        <div className="container-fluid px-0">
             <div className="mapTitle">
          <SectionTitle title="Our Office" subTitle="" />
        </div>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Map;
