//Search
import React, {useState} from 'react'
import './Search.css'
import SearchResults from '../SearchResults/SearchResults'

export default function Search (){
    const [urlInput, setUrlInput] = useState('')
    const handleUrlInput = (value) => {
        setUrlInput(value)
        // console.log(urlInput)
    }
    return(
        <div className="search-page">
            
            <section className="search-container">
                <h5>Search Products</h5>
                <h5>By URL:</h5>
                <input placeholder="Enter the URL of your product" onChange={(e) => {handleUrlInput(e.target.value)}}/>
                <h5>By Category:</h5>
                <div className="category-container">
                    {/* I added divs here just to package the input and input label together for styling purposes */}
                <div><input className="checkBox" type="checkbox"/> Shirts</div>
                <div><input className="checkBox" type="checkbox"/> Outerwear</div>
                <div><input className="checkBox" type="checkbox"/> Pants</div>
                <div><input className="checkBox" type="checkbox"/> Shoes</div>
                <div><input className="checkBox" type="checkbox"/> Accessories</div>

                </div>
                <h5>By Brand:</h5>
                <div className="brand-container">
                    <div><input className="checkBox" type="checkbox"/> Target</div>
                    <div><input className="checkBox" type="checkbox"/> Nordstrom</div>
                    <div><input className="checkBox" type="checkbox"/> Nike</div>
                    <div><input className="checkBox" type="checkbox"/> Free People</div>
                    <div><input className="checkBox" type="checkbox"/> Kuhl</div>
                </div>
                
            </section>
            <section className="search-results-container">
                <h5>Search Results</h5>
            {/* This is where we will render the SearchResults component and map over the results, the following divs just show an idea of how it will look */}
                <div className="search-results">
                    <SearchResults 
                        urlInput={urlInput}
                        />
                    

                </div>
            </section>
        </div>
    )
}