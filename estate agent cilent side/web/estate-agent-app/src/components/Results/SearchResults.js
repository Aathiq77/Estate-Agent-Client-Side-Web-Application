import React from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "../properties/PropertyCard";
import "./SearchResults.css";

const SearchResults = ({
    properties,
    favorites,
    onAddToFavorites,
    onRemoveFromFavorites,
    }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Extract search parameters from the query string
    const searchTerm = queryParams.get("location") || "";
    const category = queryParams.get("category") || "";
    const minPrice = queryParams.get("minPrice") || "";
    const maxPrice = queryParams.get("maxPrice") || "";
    const minBedrooms = queryParams.get("minBedrooms") || "";
    const maxBedrooms = queryParams.get("maxBedrooms") || "";
    const minDate = queryParams.get("minDate");
    const maxDate = queryParams.get("maxDate");

    // Filter properties based on search criteria
    const filteredProperties = properties.filter((property) => {
        const propertyDate = new Date(
        property.added.year,
        new Date(Date.parse(property.added.month + " 1, 2000")).getMonth(),
        property.added.day
        );

        return (
        // Check if location matches search term (case-insensitive)
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        // Check if property type matches selected category
        (category === "" || property.type === category) &&
        // Check if price is within the specified range
        (minPrice === "" || property.price >= parseInt(minPrice)) &&
        (maxPrice === "" || property.price <= parseInt(maxPrice)) &&
        // Check if bedroom count is within the specified range
        (minBedrooms === "" || property.bedrooms >= parseInt(minBedrooms)) &&
        (maxBedrooms === "" || property.bedrooms <= parseInt(maxBedrooms)) &&
        // Check if property date is within the specified date range
        ((minDate === null && maxDate === null) ||
            (minDate !== null &&
            maxDate !== null &&
            propertyDate >= new Date(minDate) &&
            propertyDate <= new Date(maxDate)) ||
            (minDate !== null &&
            maxDate === null &&
            propertyDate >= new Date(minDate)) ||
            (minDate === null &&
            maxDate !== null &&
            propertyDate <= new Date(maxDate)))
        );
    });

    return (
        <div className="search-results">
        <h2>Search Results</h2>
        {filteredProperties.length > 0 ? (
            <div className="property-grid">
            {filteredProperties.map((property) => (
                <PropertyCard
                key={property.id}
                property={property}
                onAddToFavorites={onAddToFavorites}
                onRemoveFromFavorites={onRemoveFromFavorites}
                isFavorite={favorites.includes(property.id)} // Check if the property is in favorites
                />
            ))}
            </div>
        ) : (
            // Show message when no properties match the search criteria
            <p>No properties found for the given criteria.</p>
        )}
        </div>
    );
};

export default SearchResults;
