import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchApi } from '../apis/Api';

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await searchApi(searchQuery);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error.message);
                // Handle error
            }
        };

        fetchSearchResults();
    }, [searchQuery]);


    return (
        <div>
            {/* <h2>Search Results for edffdfvfd"{searchQuery}"</h2> */}
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {searchResults.map((item) => (
                    <div key={item._id} className="col mb-4">
                        {/* Render each product */}
                        <div className="card">
                            <img src={item.productImageURL} className="card-img-top" alt={`Card logo for ${item.productName}`} />
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-price-range">NPR. {item.productPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
