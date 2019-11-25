import React from 'react'
import { Link } from 'react-router-dom'


function MappedPosts(props) {
    console.log('props.image', props.image)

    return (
        <Link to={`/post/${props.post_id}`}>
        <div 
            className="product-result"
            style={{backgroundImage: `url(${props.image})`}}
        >
        </div>
        </Link>
    )
}

export default MappedPosts

