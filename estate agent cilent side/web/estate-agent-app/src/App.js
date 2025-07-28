import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/common/Header';
import Banner from './components/common/Banner';
import PropertyList from './components/properties/PropertyList';
import PropertyDetails from './components/properties/PropertyDetails';
import Footer from './components/common/Footer';
import ContactUs from './components/contact/ContactUs';
import AboutUs from './components/about/AboutUs';
import ComingSoon from './components/development/Newdevelopmet';
import WhyAcquest from './components/why/WhyAcquest';
import SearchResults from './components/Results/SearchResults';
import './App.css';
import propertiesData from './data/properties.json';
import { useState, useEffect } from 'react';
import FavoritesList from "./components/favorites/FavoritesList";

function App() {
    const navigate = useNavigate();

    // State to manage the list of favorite property IDs
    const [favorites, setFavorites] = useState(() => {
        const localData = localStorage.getItem("favorites");
        return localData ? JSON.parse(localData) : [];
    });

    // State to toggle visibility of favorites list
    const [showFavorites, setShowFavorites] = useState(false);

    // Toggle the favorites list visibility
    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    // Save favorites to local storage whenever favorites change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Handle search form submission and navigate to search results
    const handleSearch = (searchParams) => {
        const queryParams = new URLSearchParams();
        if (searchParams.location) queryParams.append("location", searchParams.location);
        if (searchParams.category) queryParams.append("category", searchParams.category);
        if (searchParams.minPrice) queryParams.append("minPrice", searchParams.minPrice);
        if (searchParams.maxPrice) queryParams.append("maxPrice", searchParams.maxPrice);
        if (searchParams.minBedrooms) queryParams.append("minBedrooms", searchParams.minBedrooms);
        if (searchParams.maxBedrooms) queryParams.append("maxBedrooms", searchParams.maxBedrooms);

        navigate(`/search-results?${queryParams.toString()}`);
        console.log("Navigating to:", `/search-results?${queryParams.toString()}`);
    };

    // Add a property to the favorites list
    const addToFavorites = (propertyId) => {
        if (!favorites.includes(propertyId)) {
            setFavorites([...favorites, propertyId]);
        }
    };

    // Remove a property from the favorites list
    const removeFromFavorites = (propertyId) => {
        setFavorites(favorites.filter((id) => id !== propertyId));
    };

    return (
        <div className="App">
            {/* Header component with toggle functionality for favorites */}
            <Header
                onToggleFavorites={toggleFavorites}
                showFavorites={showFavorites}
                favorites={favorites}
            />

            {/* Conditionally display the favorites list if 'showFavorites' is true */}
            {showFavorites && (
                <FavoritesList
                    favorites={favorites}
                    properties={propertiesData.properties}
                    onRemoveFromFavorites={removeFromFavorites}
                />
            )}

            {/* Define routes for different pages */}
            <Routes>
                {/* Home route displaying banner and property list */}
                <Route
                    path="/"
                    element={
                        <>
                            <Banner onSearch={handleSearch} />
                            <PropertyList
                                properties={propertiesData.properties}
                                favorites={favorites}
                                onAddToFavorites={addToFavorites}
                                onRemoveFromFavorites={removeFromFavorites}
                            />
                        </>
                    }
                />
                {/* Route for property details */}
                <Route
                    path="/property/:id"
                    element={<PropertyDetails properties={propertiesData.properties} />}
                />
                {/* Other routes for different pages */}
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/About-Us" element={<AboutUs />} />
                <Route path="/why-acquest" element={<WhyAcquest />} />
                <Route path="/new-developments" element={<ComingSoon />} />
                {/* Search results route displaying filtered properties */}
                <Route
                    path="/search-results"
                    element={
                        <SearchResults
                            properties={propertiesData.properties}
                            favorites={favorites}
                            onAddToFavorites={addToFavorites}
                            onRemoveFromFavorites={removeFromFavorites}
                        />
                    }
                />
            </Routes>

            {/* Footer component */}
            <Footer />
        </div>
    );
}

export default App;
