import React, { useState, useEffect } from 'react';
import axios from 'axios';

//searchmapping can take in props for the following:
//categoriesFunction: function that sets the state of the categories in Search.js
//brandsFunction: function that sets the state of the brands in Search.js
//for example, <SearchMapping categoriesFunction={handleCategoriesCheckbox} brandsFunction={handleBrandsCheckbox}/>

const SearchMapping = props => {
  const { categoriesFunction, brandsFunction } = props;
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('/api/brandsandcategories')
      .then(res => {
        setBrands(res.data.brands);
        setCategories(res.data.categories);
      })
      .catch(err => console.log(err));
  }, []);

  const mappedBrands = brands.map((e, i) => {
    return (
      <div key={`brandmapping${i}`}>
        <input
          name={e}
          className='checkBox'
          type='checkbox'
          onChange={e => brandsFunction(e.target.name)}
        />
        {e}
      </div>
    );
  });

  const mappedCategories = categories.map((e, i) => {
    return (
      <div key={`categorymapping${i}`}>
        <input
          name={e}
          className='checkBox'
          type='checkbox'
          onChange={e => categoriesFunction(e.target.name)}
        />
        {e}
      </div>
    );
  });

  return (
    <>
      <section className='label-container'>
        <label>Brand:</label>
      </section>
      <div className='brand-container'>{mappedBrands}</div>
      <section className='label-container'>
        <label>Category:</label>
      </section>
      <div className='category-container'>{mappedCategories}</div>
    </>
  );
};

export default SearchMapping;
