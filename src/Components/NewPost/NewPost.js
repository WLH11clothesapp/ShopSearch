//NewPost
import React from 'react'
import './NewPost.css'

export default function NewPost(){
    return(
        <div className="new-post-page">
            <h5 className="new-post-h5"> Create New Post:</h5>
           <section className="new-post-container">
               <div className="img-preview">
                    Img preview
               </div>
               <h5> Add image URL:</h5>
               <input placeholder="Copy and paste your img URL here"/>
               <h5> Add Products:</h5>
               <div className="add-product-container">
                    <section>
                        <h6 className="add-product-h6">NAME OF PRODUCT</h6>
                        <input placeholder="Product Title"/>
                    </section>
                    <div className="selectors-container">
                    <section>
                        <h6 className="add-product-h6">CATEGORY</h6>
                        <select className="select-category">
                        <option value="" hidden> SELECT CATEGORY ↓</option>
                            <option>Shirts</option>
                            <option>Outerwear</option>
                            <option>Pants</option>
                            <option>Shoes</option>
                            <option>Accessories</option>
                        </select>
                    </section>
                    <section>
                    <h6 className="add-product-h6">BRAND</h6>
                        <select className="select-brand">
                        <option value="" hidden> SELECT BRAND ↓</option>
                            <option>Nordstrom</option>
                            <option>Kuhl</option>
                            <option>Abercrombie & Fitch</option>
                            <option>Urban Outfitters</option>
                            <option>Target</option>
                        </select>
                    </section>
                    </div>
                    <section>
                        <h6 className="add-product-h6">PRODUCT URL:</h6>
                        <input placeholder="Product URL"/>
                    </section>
                    
                    
               </div>
               {/* This button will create another add-product-container to this screen, giving the user the option of adding more than 1 product to their post */}
               <div className="add-product-button-styler">
               <button className="add-product-button"> + Add Another Product</button>
               </div>
               <button className="add-post-button">Add Post</button>
           </section>
        </div>
    )
}