import React, { useState } from 'react';
import axios from 'axios';

//searchmapping can take in props for the following:
//type: string that should either be 'Categories' or 'Brands'
//stateFunction: function that sets the state of the type above to the returned checked values
//for example, <SearchMapping type={'Brands'} stateFunction={handleBrandsCheckbox}/>

const SearchMapping = props => {
  const [data, setData] = useState('');

  const { type, stateFunction } = props;

  //axios get all brands or categories

  const mappedData = data.map((e, i) => {
    return (
      <div key={`searchmapping${(e, i)}`}>
        <input
          name={e}
          className='checkBox'
          type='checkbox'
          onChange={e => stateFunction(e.target.name)}
        />
        {e}
      </div>
    );
  });
  return (
    <>
      <section className='label-container'>
        <label>{`${type}: `}</label>
      </section>
      <div className={`${type.toLowerCase()}-container`}>
        {/* I added divs here just to package the input and input label together for styling purposes */}
        {mappedData}
      </div>
    </>
  );
};

export default SearchMapping;
