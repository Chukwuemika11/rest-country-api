// CountryDetailPage.jsx
import React from 'react';

const CountryDetailPage = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      {/* Display more detailed information about the country */}
    </div>
  );
};

export default CountryDetailPage;
