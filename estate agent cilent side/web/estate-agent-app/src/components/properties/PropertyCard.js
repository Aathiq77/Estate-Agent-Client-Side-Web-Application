import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";
import { useLocation } from 'react-router-dom';

// Importing images for the properties
import prop1Image from "../../images/Koluptiya.jpg";
import prop2Image from "../../images/maradana aprt.jpg";
import prop3Image from "../../images/bamba aprt.jpg";
import prop4Image from "../../images/dehiwala home.jpeg";
import prop5Image from "../../images/Matara Aprt.jpg";
import prop6Image from "../../images/Aluthgama Home.jpg";
import prop7Image from "../../images/maradana aprt.jpg";

// PropertyCard component to display individual property details
const PropertyCard = ({ property, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => {
  const location = useLocation(); // Get current location to handle link navigation
  
  // Function to return the corresponding image based on property ID
  const imageSrc = (() => {
    switch (property.id) {
      case "prop1":
        return prop1Image;
      case "prop2":
        return prop2Image;
      case "prop3":
        return prop3Image;
      case "prop4":
        return prop4Image;
      case "prop5":
        return prop5Image;
      case "prop6":
        return prop6Image;
      case "prop7":
        return prop7Image;
      default:
        return "/images/placeholder.jpg"; // Fallback image
    }
  })();

  // Handle favorite button click to add or remove property from favorites
  const handleFavoriteClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event from propagating

    if (isFavorite) {
      onRemoveFromFavorites(property.id); // Remove from favorites
    } else {
      onAddToFavorites(property.id); // Add to favorites
    }
  };

  return (
    <Link
      to={`/property/${property.id}`} // Link to property details page
      className="property-card-link"
      onClick={(e) => {
        // Prevent navigation if already on the property details page
        if (location.pathname === `/property/${property.id}`) {
          e.preventDefault();
        }
      }}
    >
      <div className="property-card">
        <div className="property-image">
          <img src={imageSrc} alt={property.type} /> {/* Display property image */}
          <div className="featured-tag">FEATURED</div> {/* Display featured tag */}
          <div className="sale-tag">SALE</div> {/* Display sale tag */}
        </div>
        <div className="property-summary">
          <h3 className="property-type">{property.type}</h3> {/* Property type */}
          <p className="property-name">{property.location}</p> {/* Property location */}
          <p className="property-price">LKR {property.price}</p> {/* Property price */}
          <button
            onClick={handleFavoriteClick} // Trigger add/remove favorite
            className="favorite-button"
            aria-label="Add to favorites"
          >
            {isFavorite ? (
              <i className="fas fa-heart" style={{ color: "red" }}></i> // Filled heart for favorite
            ) : (
              <i className="far fa-heart"></i> // Empty heart for non-favorite
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
