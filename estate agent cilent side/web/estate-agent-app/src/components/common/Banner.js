import React from 'react';
import SearchBar from './SearchBar';
import './Banner.css'; 

const Banner = ({ onSearch }) => { 
    return (
        <div className="banner">
        <div className="banner-content">
            <h1>What Are You Looking For?</h1>
            <SearchBar onSearch={onSearch} /> {}
        </div>
        </div>
    );
};

export default Banner;