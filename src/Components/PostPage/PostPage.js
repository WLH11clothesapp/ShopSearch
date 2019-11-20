// PostPage - This is the page you are directed to when you select a post from post results on the product page

import React from 'react'
import './PostPage.css'

export default function PostPage (){
    return(
        <div className="post-page">
            
            <h5>Selected Post</h5>
            <section className="post-photo-container">
                {/* This is a photo of the post the user clicked on from the product page */}
            </section>
            <h5>@instagram_profile</h5>
            
            <section className="search-results-container">
            <h5>Products in this post</h5>
            {/* This is where we will render all products that are listed in the post we're looking at, the divs below are examples for wireframing purposes only */}
                <div className="product-results">
                    <div className="product-result"></div>
                    <div className="product-result"></div>
                    <div className="product-result"></div>
                    <div className="product-result"></div>

                </div>
            </section>

        </div>
    )
}

