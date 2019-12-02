import React, { useEffect } from 'react';
import { v4 as randomString } from 'uuid';
import axios from 'axios';

function AddProduct(props) {
  const [state, setState] = React.useState({
    title: '',
    category: '',
    brand: '',
    image: '',
    url: '',
    actualImage: ''
  });

  useEffect(() => {
    if (state.image !== '') {
      getSignedRequest();
    }
  }, [state.image]);

  let obj = {
    ///state takes a second to hold values so it makes so the last change isn't sent this obj is just to make so it hold it
    title: '',
    category: '',
    brand: '',
    image: '',
    url: '',
    actualImage: ''
  };

  const getSignedRequest = () => {
    fetch(state.image)
      .then(res => res.blob())
      .then(blob => {
        console.log(blob);
        blob.lastModifiedDate = new Date();
        blob.name = randomString();
        const fileName = `${blob.name}`;
        axios
          .get('/api/signs3', {
            params: {
              'file-name': fileName,
              'file-type': blob.type
            }
          })
          .then(res => {
            const { signedRequest, url } = res.data;
            uploadFile(blob, signedRequest, url);
          })
          .catch(err => console.log(err));
      });
  };

  const uploadFile = (file, signedRequest, url) => {
    let splitArray = state.image.split('.');
    const fileType = splitArray[splitArray.length - 1];
    const options = {
      headers: {
        'Content-Type': `img/${fileType}`
      }
    };
    // console.log(signedRequest, file, options);

    axios
      .put(signedRequest, file, options)
      .then(res => {
        setState({ ...state, actualImage: url });
      })
      .catch(err => {
        console.log(`ERROR: \n${err}`);
      });
  };

  const handleChange = e => {
    /// handle changes for typing in input boxes where hook is called
    obj = { ...state, [e.target.name]: e.target.value };

    setState(obj);
    props.grabInfo(props.index, obj);

    console.log('state', state);
  };

  return (
    <div className='add-product-container'>
      <section>
        <h6 className='add-product-h6'>NAME OF PRODUCT</h6>
        <input
          name='title'
          value={state.title}
          onChange={handleChange}
          placeholder='Product Title'
        />
      </section>
      <div className='selectors-container'>
        <section>
          <h6 className='add-product-h6'>CATEGORY</h6>
          <select
            name='category'
            value={state.category}
            onChange={handleChange}
            className='select-category'
          >
            <option hidden> SELECT CATEGORY ↓</option>
            <option>Shirts</option>
            <option>Outerwear</option>
            <option>Pants</option>
            <option>Shoes</option>
            <option>Accessories</option>
          </select>
        </section>
        <section>
          <h6 className='add-product-h6'>BRAND</h6>
          <select
            name='brand'
            value={state.brand}
            onChange={handleChange}
            className='select-brand'
          >
            <option hidden> SELECT BRAND ↓</option>
            <option>Nordstrom</option>
            <option>Kuhl</option>
            <option>Abercrombie & Fitch</option>
            <option>Urban Outfitters</option>
            <option>Target</option>
          </select>
        </section>
      </div>
      <section>
        <h6 className='add-product-h6'>PRODUCT IMAGE URL:</h6>
        <input
          name='image'
          value={state.image}
          onChange={handleChange}
          placeholder='Product Image URL'
        />
      </section>
      <section>
        <h6 className='add-product-h6'>PRODUCT URL:</h6>
        <input
          name='url'
          value={state.url}
          onChange={handleChange}
          placeholder='Product URL'
        />
      </section>
    </div>
  );
}

export default AddProduct;
