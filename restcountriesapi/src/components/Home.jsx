import React from 'react';
import { useQuery } from '@tanstack/react-query';
import TopNav from './TopNav';
import SearchRegion from './SearchRegion';
import Region from './Region';// Import your CSS file for styling

const Home = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['rest'],
        queryFn: () =>
            fetch("https://restcountries.com/v3.1/all")
                .then((res) => res.json())
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div>
      <TopNav />
      <Region />
      <SearchRegion />
      <div className="container">
    {data.map((country) => (
        <div key={country.cca3} className="country-box">
            <div className="country">
                <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                <h2>{country.name.common}</h2>
                <p>Official Name: {country.name.official}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    ))}
</div>

        </div>
    );
};

export default Home;
