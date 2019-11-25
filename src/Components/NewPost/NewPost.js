//NewPost
import React from 'react'
import axios from 'axios'
import './NewPost.css'

import AddProduct from '../AddProduct/AddProduct'

function NewPost(props){

    const [url, setUrl] = React.useState('');
    const [newProducts, setNewProducts] = React.useState([])
    const [productCount, setProductCount] = React.useState(1) /// used to determine the count of addProduct
    const info = [];

    ///add a useEffect to get brand and category from database

    const handleUrlChange = event => {
        /// handle changes for typing in input boxes where hook is called
        setUrl( event.target.value );
    };

    const addProductObjToArr = (newProductObj, i) => {
        /// handle changes for typing in input boxes where hook is called
        setNewProducts([
          ...newProducts,
          newProductObj
        ]);
    };

    const grabInfo= (index, stateObj) => {
        console.log('index', index)
        console.log('stateObj', stateObj)
        info[index] = stateObj
        console.log(info)
    }

    function makePost() {
        axios.post("/api/post", { user_id:props.user.userId , image:url, text: ''})
        .then(res => )
    }

    const decCount = () => {setProductCount(productCount - 1); console.log('dec')}
    const incCount = () => {setProductCount(productCount + 1); console.log('inc')}
    const newProductsList= []
    for(let i=0;i<productCount;i++){
        newProductsList.push(<AddProduct index={i} key={`newProd ${i}`} grabInfo={grabInfo}/>)
    }


    return(
        <div className="new-post-page">
            <h5 className="new-post-h5"> Create New Post:</h5>
           <section className="new-post-container">
               <div className="img-preview">
                    Img preview
               </div>
               <h5> Add image URL:</h5>
               <input value={url} onChange={handleUrlChange} placeholder="Copy and paste your img URL here"/>
               <h5> Add Products:</h5>
               
                {newProductsList}
                
               {/* This button will create another add-product-container to this screen, giving the user the option of adding more than 1 product to their post */}
               <div className="add-product-button-styler">
               <button className="add-product-button" onClick={incCount}> + Add Another Product</button>
               {productCount > 1 && <button className="add-product-button" onClick={decCount}> - remove a Product</button>}  
               </div>
               <button className="add-post-button" onClick={makePost}>Add Post</button>
           </section>
        </div>
    )
}

export default NewPost