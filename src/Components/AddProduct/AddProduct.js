import React, { useEffect } from 'react';
import { v4 as randomString } from 'uuid';
import axios from 'axios';
import './AddProduct.css';

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

  const brands = props.brands.map((e, i) => {
    return <option key={`brand ${i}`}>{e}</option>;
  });
  const categories = props.categories.map((e, i) => {
    return <option key={`cat ${i}`}>{e}</option>;
  });

  const getSignedRequest = () => {
    fetch(state.image)
      .then(res => res.blob())
      .then(blob => {
        // console.log(blob);
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
        <p id='link-products-title'> Add Product</p>
        <div className='label-container-add-product'>
          <label className='new-post-title'>
            Name of Product<span className='star'>*</span>
          </label>
        </div>
        <input
          name='title'
          value={state.title}
          onChange={e => handleChange(e)}
          className='product-input'
          // placeholder='Product Title'
        />
      </section>
      <div className='selectors-container'>
        <section>
          <div className='label-container-selectors'>
            <label className='new-post-title'>
              Category<span className='star'>*</span>
            </label>
          </div>
          <select
            name='category'
            value={state.category}
            onChange={e => handleChange(e)}
            className='select-category'
          >
            <option hidden> SELECT ↓</option>
            {categories}
          </select>
        </section>
        <section>
          <div className='label-container-selectors'>
            <label className='new-post-title'>
              Brand<span className='star'>*</span>
            </label>
          </div>
          <select
            name='brand'
            value={state.brand}
            onChange={e => handleChange(e)}
            className='select-brand'
          >
            <option hidden> SELECT ↓</option>
            {brands}
          </select>
        </section>
      </div>
      <section>
        <div className='label-container-add-product'>
          <label className='new-post-title'>
            Product Image URL<span className='star'>*</span>
          </label>
        </div>
        <input
          name='image'
          value={state.image}
          onChange={e => handleChange(e)}
          // placeholder='Product Image URL'
          className='product-input'
        />
      </section>
      <section>
        <div className='label-container-add-product'>
          <label className='new-post-title'>
            Link to Product<span className='star'>*</span>
          </label>
        </div>
        <input
          name='url'
          value={state.url}
          onChange={e => handleChange(e)}
          // placeholder='Product URL'
          className='product-input'
        />
      </section>
    </div>
  );
}

export default AddProduct;
