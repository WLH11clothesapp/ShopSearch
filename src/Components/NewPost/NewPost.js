//NewPost
import React, { useEffect } from 'react';
import { v4 as randomString } from 'uuid';
import { connect } from 'react-redux';
import axios from 'axios';
import './NewPost.css';

import AddProduct from '../AddProduct/AddProduct';

function NewPost(props) {
  const [postImage, setPostImage] = React.useState('');
  const [actualUrl, setactualUrl] = React.useState('');
  const [productCount, setProductCount] = React.useState(1); /// used to determine the count of addProduct
  const info = [];

  useEffect(() => {
    if (postImage !== '') {
      getSignedRequest();
    }
  }, [postImage]);
  ///add a useEffect to get brand and category from database

  const getSignedRequest = () => {
    fetch(postImage)
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
    let splitArray = url.split('.');
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
        setactualUrl(url);
      })
      .catch(err => {
        console.log(`ERROR: \n${err}`);
      });
  };

  const handleUrlChange = event => {
    /// handle changes for typing in input boxes where hook is called
    setPostImage(event.target.value);
  };

  const grabInfo = (index, stateObj) => {
    console.log('index', index);
    console.log('stateObj', stateObj);
    info[index] = stateObj;
    console.log(info);
  };

  async function makePost() {
    let post_id = await axios
      .post('/api/post', {
        user_id: props.user_id, /// built this way so we don't have to login every time to work on this page
        image: actualUrl,
        text: 'word'
      })
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => console.log(err));

    console.log('post_id', post_id);

    for (let j = 0; j < productCount; j++) {
      const i = info[j];
      console.log('post_id', post_id);
      await axios
        .post('/api/product', {
          title: i.title,
          brand: i.brand,
          category: i.category,
          url: i.url,
          img_url: i.actualImage,
          post_id: post_id.post_id
        })
        .then(res => {
          console.log('res.data', res.data, j);
          return res.data;
        })
        .catch(err => console.log(err));
    }
  }

  const decCount = () => {
    setProductCount(productCount - 1);
    console.log('dec');
  };
  const incCount = () => {
    setProductCount(productCount + 1);
    console.log('inc');
  };
  const newProductsList = [];
  for (let i = 0; i < productCount; i++) {
    newProductsList.push(
      <AddProduct index={i} key={`newProd ${i}`} grabInfo={grabInfo} />
    );
  }

  return (
    <div className='new-post-page'>
      <h5 className='new-post-h5'> Create New Post:</h5>
      <section className='new-post-container'>
        <div className='img-preview'>Img preview</div>
        <h5> Add image URL:</h5>
        <input
          value={postImage}
          onChange={handleUrlChange}
          placeholder='Copy and paste your img URL here'
        />
        <h5> Add Products:</h5>
        {newProductsList} {/* displays addProduct * product count */}
        <div className='add-product-button-styler'>
          <button className='add-product-button' onClick={incCount}>
            {' '}
            + Add Another Product
          </button>
          {productCount > 1 && (
            <button className='add-product-button' onClick={decCount}>
              {' '}
              - remove a Product
            </button>
          )}
        </div>
        <button className='add-post-button' onClick={makePost}>
          Add Post
        </button>
      </section>
    </div>
  );
}

function mapStateToProps(reactState) {
  ///grabs user_id off of state
  const { user_id } = reactState;
  return { user_id };
}

export default connect(mapStateToProps, null)(NewPost); //connect to redux
