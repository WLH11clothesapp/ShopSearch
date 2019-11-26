import React from 'react';
import { Link } from 'react-router-dom';

//Maps through posts of given user and returns an image
const UserPosts = props => {
  return props.posts.map((e, i) => {
    return (
      <Link to={`/post/${e.post_id}`}>
        <div
          key={`userposts${i}`}
          className='user-post'
          style={{ backgroundImage: `url(${e.image})` }}
        ></div>
      </Link>
    );
  });
};

export default UserPosts;
