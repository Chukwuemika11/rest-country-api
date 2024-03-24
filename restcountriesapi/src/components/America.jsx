import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Africa = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery({
        queryKey: ['america'],
        queryFn: () => fetch("https://restcountries.com/v3.1/region/america").then(res => res.json())
    });

    if (isLoading) return <div>Data is loading...</div>;
    if (error) return <div>There was an error: {error.message}</div>;

    return (
        <div>
        <button onClick={() => navigate('/')}>Back</button>        
             {/* Navigate back to the home page */}
            {data && data.map((country) => (
                <div key={country.cca3} className="country">
                    <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                    <h2>{country.name.common}</h2>
                    <p>Official Name: {country.name.official}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            ))}
        </div>
    );
}

export default Africa;
