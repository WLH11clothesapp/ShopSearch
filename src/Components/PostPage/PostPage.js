// PostPage - This is the page you are directed to when you select a post from post results on the product page

import React, { useState, useEffect } from 'react';
import './PostPage.css';
import axios from 'axios';
import MappedProducts from '../MappedProducts/MappedProducts';

export default function PostPage(props) {
  const [post, setPost] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ///grabs the post information to display post image an IG handler
    axios
      .get(`/api/post/${props.match.params.id}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => console.log(err));

    //grabs info to pass onto mapped products that are connected to the post
    axios
      .get(`/api/post-products/${props.match.params.id}`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  const productsList = products.map((e, i) => {
    return (
      <MappedProducts
        key={`mapped product ${i}`}
        image={e.img_url}
        product_id={e.product_id}
      />
    );
  });

  const atRemover = handle => {
    return handle.slice(1);
  };

  return (
    <div className='post-page'>
        {/* used empty spaces just to make it look clean still. */}
      <h5>  </h5>
      <section className='post-photo-container'>
        {post.image && <img src={post.image} alt=' your selected post' />}
      </section>
      <a
        href={
          post.ig_handle
            ? `https://www.instagram.com/${atRemover(post.ig_handle)}`
            : '/'
        }
      >{post.ig_handle}
      </a>
      <p>{post.text}</p>
      <section className='search-results-container'>
        <h5>Products in this post</h5>
        <div className='product-results'>{productsList}</div>
      </section>
    </div>
  );
}
