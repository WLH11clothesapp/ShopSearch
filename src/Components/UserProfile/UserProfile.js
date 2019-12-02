// UserProfile
import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { connect } from 'react-redux';
import { resetUser } from '../../redux/userReducer';
import axios from 'axios';
import UserPosts from '../UserPosts/UserPosts';

function UserProfile(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(`user_id: ${props.user_id}`);
    axios
      .get(`/api/posts/${props.user_id}`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const logout = () => {
    axios
      .post('/api/logout')
      .then(() => {
        props.resetUser();
        props.history.push('/');
      })
      .catch(err => console.log(err));
  };
  const newPostPush = () => {
      props.history.push('/newpost')
  }
  console.log(props);
  return (
    <div className='user-profile-page'>
      <h5>Welcome back, {props.name} </h5>
      <button className='logout-button' onClick={() => logout()}>
        Log Out
      </button>
      <h5>Create New Post:</h5>
      <section className='add-post-container' onClick={() => newPostPush()} >+</section>
      <h5>Your Recent Posts:</h5>
      {/* if we like this idea of showing the user's posts on their profile page, we will need an additional component that we map over in this section */}
      <section className='user-posts'>
        <UserPosts posts={posts} />
      </section>
    </div>
  );
}

const mapStateToProps = reduxState => {
  const { user_id, email, name, ig_handle } = reduxState;
  return {
    user_id,
    email,
    name,
    ig_handle
  };
};

const mapDispatchToProps = {
  resetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
