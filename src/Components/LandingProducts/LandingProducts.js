import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//this component makes an axios request to get all the products in the library, generates 5 random numbers and displays those items
const LandingProducts = () => {
  const [products, setProducts] = useState([]);
  const [indexes] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get('/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    };
    getProducts();
    //products.length goes where 15 is
  }, []);

  //This is the random number generator so the products are shuffled every time you reload
  if (indexes.length === 0) {
    for (let i = 0; i < products.length; i++) {
      indexes.push(i);
    }
  }
  let currentIndex = indexes.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = indexes[currentIndex];
    indexes[currentIndex] = indexes[randomIndex];
    indexes[randomIndex] = temporaryValue;
  }
  return (
    <>
      {products.length >= 1 ? (
        <>
          <Link
            className='random-product'
            to={`/product/${products[indexes[0]].product_id}`}
          >
            <div
              className='random-product-image'
              style={{
                backgroundImage: `url(${products[indexes[0]].img_url})`
              }}
            ></div>
          </Link>
          <Link
            className='random-product'
            to={`/product/${products[indexes[1]].product_id}`}
          >
            <div
              className='random-product-image'
              style={{
                backgroundImage: `url(${products[indexes[1]].img_url})`
              }}
            ></div>
          </Link>
          <Link
            className='random-product'
            to={`/product/${products[indexes[2]].product_id}`}
          >
            <div
              className='random-product-image'
              style={{
                backgroundImage: `url(${products[indexes[2]].img_url})`
              }}
            ></div>
          </Link>
          <Link
            className='random-product'
            to={`/product/${products[indexes[3]].product_id}`}
          >
            <div
              className='random-product-image'
              style={{
                backgroundImage: `url(${products[indexes[3]].img_url})`
              }}
            ></div>
          </Link>
        </>
      ) : (
        <p>Loading{}</p>
      )}
    </>
  );
};

export default LandingProducts;
