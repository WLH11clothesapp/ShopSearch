// ProductPage - This is the page you are directed to when you select a product from search results on the search page

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MappedPosts from '../MappedPosts/MappedPosts'
import './ProductPage.css'

export default function ProductPage (props){

        const [product, setProduct] = useState({});
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            /// Grabs the Product info to display 
            axios.get(`/api/product/${props.match.params.id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))

            //grabs info to pass onto mapped products that are connected to the post
            axios.get(`/api/product-posts/${props.match.params.id}`)
            .then(res => {console.log(res.data); setPosts(res.data)})
            .catch(err => console.log(err))
        }, [props.match.params.id])
        
        const postsList = posts.map((e, i) => {
            console.log('e', e);
            return <MappedPosts 
                    key={`mapped post ${i}`}
                    image={e.image}
                    post_id={e.post_id}
                    />
        })


        console.log('postsList', postsList)

    return(
        <div className="product-page">
            
            <h5>Product Title</h5>
            <section className="product-photo-container">
                { product.img_url && <img src={product.img_url} alt="your selected product" /> }
            </section>
            <h5>Find this product <a href={product.url}> Here</a></h5>
            
            <section className="search-results-container">
            <h5>See how others styled this product</h5>
            
                <div className="post-results">
                        { postsList }
                    <div className="post-result">
                    </div>
                    

                </div>
            </section>

        </div>
    )
}
