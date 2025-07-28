import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {

    // State hooks for search input fields
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minBedrooms, setMinBedrooms] = useState("");
    const [maxBedrooms, setMaxBedrooms] = useState("");
    const [minDate, setMinDate] = useState("");
    const [maxDate, setMaxDate] = useState("");

    const navigate = useNavigate();

    // Handle search button click
    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        if (location) queryParams.append("location", location);
        if (category) queryParams.append("category", category);
        if (minPrice) queryParams.append("minPrice", minPrice);
        if (maxPrice) queryParams.append("maxPrice", maxPrice);
        if (minBedrooms) queryParams.append("minBedrooms", minBedrooms);
        if (maxBedrooms) queryParams.append("maxBedrooms", maxBedrooms);
        if (minDate) queryParams.append("minDate", minDate);
        if (maxDate) queryParams.append("maxDate", maxDate);

        // Navigate to search results page with query params
        navigate(`/search-results?${queryParams.toString()}`);
        console.log("Navigating to:", `/search-results?${queryParams.toString()}`);
    };

    return (
        <div className="search-bar">
        {/* Search Input Fields */}
        <input
            type="text"
            placeholder="Search City..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Categories</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
        </select>
        <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
        />
        <input
            type="number"
            placeholder="Min Bedrooms"
            value={minBedrooms}
            onChange={(e) => setMinBedrooms(e.target.value)}
        />
        <input
            type="number"
            placeholder="Max Bedrooms"
            value={maxBedrooms}
            onChange={(e) => setMaxBedrooms(e.target.value)}
        />
        <input
            type="date"
            placeholder="Min Date"
            value={minDate}
            onChange={(e) => setMinDate(e.target.value)}
        />
        <input
            type="date"
            placeholder="Max Date"
            value={maxDate}
            onChange={(e) => setMaxDate(e.target.value)}
        />
        
        {/* Search Button */}
        <button className="search-button" onClick={handleSearch}>
            <i className="fas fa-search"></i>
        </button>
        </div>
    );
};

export default SearchBar;
