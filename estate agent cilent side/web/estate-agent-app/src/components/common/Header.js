import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Header.css"; // Import styles for the header

const Header = ({ onToggleFavorites, showFavorites }) => {
    return (
        <header className="header">
            {/* Logo section */}
            <div className="logo">
                <Link to="/">LIONEL PROPERTIES</Link>
            </div>

            {/* Navigation menu */}
            <nav className="navigation">
                <ul>
                <li>
                    <Link to="/why-acquest">Why Lionel</Link>
                </li>
                <li>
                    <Link to="/new-developments">New Developments</Link>
                </li>
                <li>
                    <Link to="/About-Us">About Us</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
                </ul>
            </nav>

            {/* Favorites button */}
            <div className="header-right">
                <button onClick={onToggleFavorites} className="favorites-toggle">
                <i className={showFavorites ? "fas fa-heart" : "far fa-heart"}></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
