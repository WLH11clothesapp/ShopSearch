// ProductPage - This is the page you are directed to when you select a product from search results on the search page

import React from 'react'
import './ProductPage.css'

export default function ProductPage (){
    return(
        <div className="product-page">
            <nav className="placeholder">When our nav component is wireframed, we can add it here. This nav is a placeholder for now</nav>
            <h5>Product Title</h5>
            <section className="product-photo-container">
                {/* This is a photo of the product the user clicked on from the search page */}
            </section>
            <h5>Find this product here (add link to URL)</h5>
            
            <section className="search-results-container">
            <h5>See how others styled this product</h5>
            {/* This is where we will render posts that contain the product we're looking at */}
                <div className="post-results">
                    <div className="post-result"></div>
                    <div className="post-result"></div>
                    <div className="post-result"></div>
                    <div className="post-result"></div>
                    <div className="post-result"></div>
                    <div className="post-result"></div>

                </div>
            </section>

        </div>
    )
}
