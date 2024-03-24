// CountryListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CountryListPage = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <Link to={`/country/${country.alpha3Code}`}>
            <h2>{country.name}</h2>
          </Link>
          <p>Population: {country.population}</p>
          {/* Add more basic information about the country */}
        </div>
      ))}
    </div>
  );
};

export default CountryListPage;
