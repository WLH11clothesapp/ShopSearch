//Search
import React, { useState } from 'react';
import './Search.css';
import SearchMapping from './SearchMapping';
import SearchResults from '../SearchResults/SearchResults';

export default function Search() {
  const [urlInput, setInput] = useState('');
  const [categories, setCategories] = useState({});
  const [brands, setBrands] = useState({});

  const handleUrlInput = value => {
    setInput(value);
    // console.log(urlInput)
  };

  const handleCategoriesCheckbox = name => {
    setCategories({ ...categories, [name]: !categories[name] || false });
  };
  const handleBrandsCheckbox = name => {
    setBrands({ ...brands, [name]: !brands[name] });
  };
  return (
    <div className='search-page'>
      <section className='search-container'>
        <p className='search-title'>Search All Products</p>
        <section className='label-container'>
          <label>URL:</label>
        </section>
        <input
          value={urlInput}
          // placeholder='Enter the URL of your product'
          onChange={e => {
            handleUrlInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setInput('');
          }}
          id='clear-button'
        >
          Clear
        </button>
        <SearchMapping
          brandsFunction={handleBrandsCheckbox}
          categoriesFunction={handleCategoriesCheckbox}
        />
      </section>
      <section className='search-results-container'>
        <p className='search-title'>Search Results</p>
        {/* This is where we will render the SearchResults component and map over the results, the following divs just show an idea of how it will look */}
        <div className='search-results'>
          <SearchResults
            urlInput={urlInput}
            categories={categories}
            brands={brands}
          />
        </div>
      </section>
    </div>
  );
}
