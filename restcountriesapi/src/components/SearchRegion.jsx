import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, isLoading, isError } = useQuery({
        queryKey: ['rest', searchQuery], // Include search query in query key
        queryFn: () =>
            fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Country not found');
                    }
                    return res.json();
                }),
        enabled: searchQuery.trim() !== '', // Enable query when search query is not empty
        staleTime: 50 
    });

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const renderSearchResults = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (isError) {
            return <div>Country not found</div>;
        }

        if (!data) {
            return null;
        }

        return (
            <div className='searchResults'>
                {data.map((country) => (
                    <div key={country.cca3} className='country'>
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
    };

    return (
        <>
            <div className='searchFilter'>
                <div className='input'>
                    <input
                        type="text"
                        placeholder='Search for a country'
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
                {renderSearchResults()}
            </div>
        </>
    );
};

export default Search;
