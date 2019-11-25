//Search
import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchResults from '../SearchResults/SearchResults';

export default function Search() {
  const [urlInput, setInput] = useState('');
  const [categories, setCategories] = useState({
    Shirts: false,
    Outerwear: false,
    Pants: false,
    Shoes: false,
    Accessories: false
  });
  const [brands, setBrands] = useState({
    Target: false,
    Nordstrom: false,
    Nike: false,
    Freepeople: false,
    Kuhl: false
  });

  const handleUrlInput = value => {
    setInput(value);
    // console.log(urlInput)
  };

  const handleCategoriesCheckbox = name => {
    setCategories({ ...categories, [name]: !categories[name] });
  };
  const handleBrandsCheckbox = name => {
    setBrands({ ...brands, [name]: !brands[name] });
  };
  return (
    <div className='search-page'>
      <section className='search-container'>
        <h5>Search Products</h5>
        <h5>By URL:</h5>
        <input
          value={urlInput}
          placeholder='Enter the URL of your product'
          onChange={e => {
            handleUrlInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setInput('');
          }}
        >
          Clear
        </button>
        <h5>By Category:</h5>
        <div className='category-container'>
          {/* I added divs here just to package the input and input label together for styling purposes */}
          <div>
            <input
              name='Shirts'
              className='checkBox'
              type='checkbox'
              onChange={e => handleCategoriesCheckbox(e.target.name)}
            />
            Shirts
          </div>
          <div>
            <input
              name='Outerwear'
              className='checkBox'
              type='checkbox'
              onChange={e => handleCategoriesCheckbox(e.target.name)}
            />
            Outerwear
          </div>
          <div>
            <input
              name='Pants'
              className='checkBox'
              type='checkbox'
              onChange={e => handleCategoriesCheckbox(e.target.name)}
            />
            Pants
          </div>
          <div>
            <input
              name='Shoes'
              className='checkBox'
              type='checkbox'
              onChange={e => handleCategoriesCheckbox(e.target.name)}
            />
            Shoes
          </div>
          <div>
            <input
              name='Accessories'
              className='checkBox'
              type='checkbox'
              onChange={e => handleCategoriesCheckbox(e.target.name)}
            />
            Accessories
          </div>
        </div>
        <h5>By Brand:</h5>
        <div className='brand-container'>
          <div>
            <input
              name='Target'
              className='checkBox'
              type='checkbox'
              onChange={e => handleBrandsCheckbox(e.target.name)}
            />
            Target
          </div>
          <div>
            <input
              name='Nordstrom'
              className='checkBox'
              type='checkbox'
              onChange={e => handleBrandsCheckbox(e.target.name)}
            />
            Nordstrom
          </div>
          <div>
            <input
              name={`Abercrombie & Fitch`}
              className='checkBox'
              type='checkbox'
              onChange={e => handleBrandsCheckbox(e.target.name)}
            />
            Nike
          </div>
          <div>
            <input
              name='Urban Outfitters'
              className='checkBox'
              type='checkbox'
              onChange={e => handleBrandsCheckbox(e.target.name)}
            />
            Urban Outfitters
          </div>
          <div>
            <input
              name='Kuhl'
              className='checkBox'
              type='checkbox'
              onChange={e => handleBrandsCheckbox(e.target.name)}
            />
            Kuhl
          </div>
        </div>
      </section>
      <section className='search-results-container'>
        <h5>Search Results</h5>
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
