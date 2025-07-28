import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import images
import floor1 from "../../images/prop1_floorplan.png";
import floor2 from "../../images/prop2_floorplan.jpg";

// Leaflet icon setup
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'; 
import iconShadow from 'leaflet/dist/images/marker-shadow.png'; 

// Property images based on the property ID
import prop1Image from "../../images/Koluptiya.jpg";
import prop2Image from "../../images/maradana aprt.jpg";
import prop3Image from "../../images/bamba aprt.jpg";
import prop4Image from "../../images/dehiwala home.jpeg";
import prop5Image from "../../images/Matara Aprt.jpg";
import prop6Image from "../../images/Aluthgama Home.jpg";
import prop7Image from "../../images/maradana aprt.jpg";

// Leaflet custom marker icon
const customIcon = new L.Icon({
  iconUrl: icon, 
  shadowUrl: iconShadow, 
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34] 
});

const PropertyDetails = ({ properties }) => {
  const { id } = useParams(); // Get property ID from URL params
  const property = properties.find((prop) => prop.id === id); // Find property by ID
  const [activeTab, setActiveTab] = useState("gallery"); // State to track active tab

  // Determine the property image based on its ID
  const imageSrc = (() => {
    switch (property.id) {
      case "prop1": return prop1Image;
      case "prop2": return prop2Image;
      case "prop3": return prop3Image;
      case "prop4": return prop4Image;
      case "prop5": return prop5Image;
      case "prop6": return prop6Image;
      case "prop7": return prop7Image;
      default: return "/images/placeholder.jpg"; // Default image if no match
    }
  })();

  // Floor plan images based on property ID
  const floorPlanImages = {
    prop1: floor1,
    prop2: floor2,
    prop3: floor1,
    prop4: floor2,
    prop5: floor1,
    prop6: floor2,
    prop7: floor1,
  };

  // Get the corresponding floor plan path
  const floorPlanPath = floorPlanImages[property.id];

  // Position for the map based on property coordinates
  const position = [property.latitude, property.longitude];

  // If property is not found, show a message
  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="property-details">
      {/* Banner image */}
      <div className="property-banner">
        <img src={imageSrc} alt={property.type} className="banner-image" />
      </div>

      <div className="property-content">
        {/* Main property content */}
        <div className="property-main">
          <div className="property-details-header">
            <p className="property-type">{property.type} - {property.tenure}</p>
            <h2 className="property-location">{property.location}</h2>
            <p className="property-price">LKR {property.price}</p>
          </div>

          {/* Tab navigation */}
          <div className="property-details-tabs">
            <button
              className={`tab ${activeTab === "map" ? "active" : ""}`}
              onClick={() => setActiveTab("map")}
            >
              Map
            </button>
            <button
              className={`tab ${activeTab === "floorplan" ? "active" : ""}`}
              onClick={() => setActiveTab("floorplan")}
            >
              Floor Plan
            </button>
          </div>

          {/* Tab content */}
          {activeTab === "gallery" && (
            <div className="tab-content">Gallery content here.</div>
          )}
          {activeTab === "map" && (
            <div className="tab-content">
              <MapContainer
                center={position} // Set map center
                zoom={13}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>{property.location}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}

          {activeTab === "floorplan" && (
            <div className="tab-content">
              {/* Display floor plan if available */}
              {floorPlanPath ? (
                <img src={floorPlanPath} alt="Floor Plan" className="floorplan-image" />
              ) : (
                <p>Floor plan not available for this property.</p>
              )}
            </div>
          )}

          {/* Property details section */}
          <div className="property-details-info">
            <h3>About this Property</h3>
            <p>{property.description}</p>
          </div>
        </div>

        {/* Enquiry section */}
        <div className="enquire-now">
          <h3>Enquire Now</h3>
          <p className="property-id">Property ID {property.id}</p>
          <button className="enquire-button phone">+94 114 01 02 03</button>
          <button className="enquire-button whatsapp">Whatsapp</button>
          <button className="enquire-button email">Make an Enquiry</button>
          <button className="enquire-button schedule">Schedule a Viewing</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
