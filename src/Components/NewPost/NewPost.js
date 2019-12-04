//NewPost
import React, { useEffect } from 'react';
import { v4 as randomString } from 'uuid';
import { connect } from 'react-redux';
import axios from 'axios';
import './NewPost.css';

import AddProduct from '../AddProduct/AddProduct';

function NewPost(props) {
  const [postImage, setPostImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [actualUrl, setactualUrl] = React.useState('');
  const [productCount, setProductCount] = React.useState(1); /// used to determine the count of addProduct
  const [brands, setBrands] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [info, setInfo] = React.useState([]);

  useEffect(() => {
    axios.get('/api/brandsandcategories').then(res => {
      setBrands(res.data.brands);
      setCategories(res.data.categories);
      if (postImage !== '') {
        getSignedRequest();
      }
    });
  }, [postImage]);
  ///add a useEffect to get brand and category from database

  const getSignedRequest = () => {
    let file = document.getElementById('file').files[0];
    console.log(file);
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
    axios
      .get('/api/signs3', {
        params: {
          'file-name': fileName,
          'file-type': file.type
        }
      })
      .then(res => {
        const { signedRequest, url } = res.data;
        uploadFile(file, signedRequest, url);
      })
      .catch(err => console.log(err));
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
  const handleTextChange = event => {
    /// handle changes for typing in input boxes where hook is called
    setText(event.target.value);
  };
  const grabInfo = (index, stateObj) => {
    let newInfo = info.slice();
    newInfo[index] = stateObj;
    setInfo(newInfo);
    console.log(info);
  };

  async function makePost() {
    let post_id = await axios
      .post('/api/post', {
        user_id: props.user_id,
        image: actualUrl,
        text: text
      })
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));

    // console.log('post_id', post_id);

    for (let j = 0; j < productCount; j++) {
      const i = info[j];
      console.log(i);
      // console.log('post_id', post_id);
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
          if (j === productCount - 1) {
            props.history.push('/userprofile');
          }
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
      <AddProduct
        index={i}
        key={`newProd ${i}`}
        grabInfo={grabInfo}
        brands={brands}
        categories={categories}
      />
    );
  }

  return (
    <div className='new-post-page'>
      <section className='new-post-container'>
        <p className='new-post-title'> Create New Post:</p>
        <div
          className='img-preview'
          style={{ backgroundImage: `url(${actualUrl})` }}
        >
          {!actualUrl && 'Image Preview'}
        </div>
        <div className='label-container'>
          <label className='new-post-title'>
            Upload Image<span className='star'>*</span>
          </label>
        </div>
        <input
          type='file'
          id='file'
          accept='image/png, image/jpeg'
          onChange={() => getSignedRequest()}
        />
        <div className='label-container'>
          <label className='new-post-title'>
            Add Description<span className='star'>*</span>
          </label>
        </div>
        <textarea
          cols='50'
          rows='4'
          value={text}
          onChange={handleTextChange}
          // placeholder='Add Description of your New Post'
        ></textarea>
        <br />
        {newProductsList} {/* displays addProduct * product count */}
        <div className='add-product-button-styler'>
          <button className='add-product-button' onClick={incCount}>
            {' '}
            + Add Product
          </button>
          {productCount > 1 && (
            <button className='add-product-button' onClick={decCount}>
              {' '}
              - Remove Product
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
