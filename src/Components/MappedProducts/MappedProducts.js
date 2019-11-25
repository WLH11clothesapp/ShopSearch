import React from 'react'
import { Link } from 'react-router-dom'

export default function MappedProducts(props) {

    return (
        <Link to={`/product/${props.product_id}`}>
        <div 
            className="product-result" 
            style={{backgroundImage: `url(${props.image})`}}
        >

        </div>
        </Link>
    )
}

