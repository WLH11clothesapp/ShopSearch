// PostPage - This is the page you are directed to when you select a post from post results on the product page

import React, { useState, useEffect } from 'react'
import './PostPage.css'
import axios from 'axios'
import MappedProducts from '../MappedProducts/MappedProducts'


export default function PostPage (props){
    

    const [post, setPost] = useState({})
    const [products, setProducts] = useState(['world'])

    useEffect(() => {
        console.log('props', props.match.params.id)
        axios.get(`/api/post/${props.match.params.id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => console.log(err))

        axios.get(`/api/post-products/${props.match.params.id}`)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
        console.log('p',post)
    },[props.match.params.id])

    

    const productsList = products.map((e, i) => {
        console.log('e', e)
        return <MappedProducts 
                    key={`mapped product ${i}`}  
                    image={e.img_url}
                    product_id={e.product_id}
                    />
    })

    return(
        <div className="post-page">
            
            <h5>Selected Post</h5>
            <section className="post-photo-container">
                { post.image && <img src={post.image} alt=' your selected post'/>}
            </section>
    <h5>{post.ig_handle}</h5>
            
            <section className="search-results-container">
            <h5>Products in this post</h5>
                <div className="product-results">
                    {productsList}
                </div>
            </section>

        </div>
    )
}

