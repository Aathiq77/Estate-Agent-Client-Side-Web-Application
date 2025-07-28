import React from "react";

const FavoritesList = ({ favorites, properties, onRemoveFromFavorites }) => {
    // Filter properties based on favorites
    const favoriteProperties = properties.filter((property) =>
        favorites.includes(property.id)
    );

    return (
        <div className="favorites-list">
        <h3>Favorite Properties</h3>
        {favoriteProperties.length > 0 ? (
            <ul className="favorites-ul">
            {/* Render favorite properties */}
            {favoriteProperties.map((property) => (
                <li key={property.id} className="favorite-item">
                <span className="favorite-property-location">
                    {property.location}
                </span>
                {/* Button to remove property from favorites */}
                <button
                    className="remove-button"
                    onClick={() => onRemoveFromFavorites(property.id)}
                >
                    Remove
                </button>
                </li>
            ))}
            </ul>
        ) : (
            <p>No favorite properties added yet.</p> // Message if no favorites
        )}
        </div>
    );
};

export default FavoritesList;
