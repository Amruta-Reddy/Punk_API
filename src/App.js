import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = 'https://api.punkapi.com/v2/beers';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    searchBeers("IPA"); // You can set an initial search term here
  }, []);

  const searchBeers = async (beerName) => {
    try {
      const response = await fetch(`${API_URL}?beer_name=${beerName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <h1>Punk API Beer Explorer</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for beers"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBeers(searchTerm)}
        />
      </div>

      {beers?.length > 0 ? (
        <div className="container">
          {beers.map((beer) => (
            <BeerCard beer={beer} key={beer.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No beers found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
