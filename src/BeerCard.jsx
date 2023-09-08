import React from 'react';

const BeerCard = ({ beer: { id, name, tagline, image_url, first_brewed } }) => {
  return (
    <div className="beer-card" key={id}>
      <div>
        <img src={image_url !== null ? image_url : "https://via.placeholder.com/400"} alt={name} />
      </div>

      <div>
        <h3>{name}</h3>
        <p>{tagline}</p>
        <p>First Brewed: {first_brewed}</p>
      </div>
    </div>
  );
}

export default BeerCard;
