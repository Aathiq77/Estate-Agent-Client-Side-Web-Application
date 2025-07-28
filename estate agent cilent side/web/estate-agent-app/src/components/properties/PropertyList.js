import React from "react";
import Slider from "react-slick";
import PropertyCard from "./PropertyCard";
import "./PropertyList.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyList = ({
  properties,
  favorites,
  onAddToFavorites,
  onRemoveFromFavorites,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev" aria-label="Previous" />,
    nextArrow: <button className="slick-next" aria-label="Next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="property-list">
      <DndProvider backend={HTML5Backend}>
        <div className="property-list-text">
          <h2 className="property-heading">Showcase Properties</h2>
          <p className="property-subheading">
            Select from an extensive inventory of residential or commercial
            properties listed with us for sale or rent.
          </p>
        </div>
        <Slider {...settings} className="slider">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onAddToFavorites={onAddToFavorites}
              onRemoveFromFavorites={onRemoveFromFavorites}
              isFavorite={favorites.includes(property.id)}
            />
          ))}
        </Slider>
      </DndProvider>
    </div>
  );
};

export default PropertyList;