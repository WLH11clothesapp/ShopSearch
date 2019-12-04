// UserProfile
import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { connect } from 'react-redux';
import { resetUser } from '../../redux/userReducer';
import axios from 'axios';
import UserPosts from '../UserPosts/UserPosts';

function UserProfile(props) {

  const [posts, setPosts] = useState([]); // this hook sets state.
// this is basically like a componentDidMount with the open [].
// you can also use useEffect as a componentDidUpdate
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
//   when clicking the + post button it pushes to newpost
  const newPostPush = () => {
      props.history.push('/newpost')
  }
  console.log(props);
  return (
    <div className='user-profile-page'>
      <section className="profile-info">
      
      
        <i class="fas fa-user-circle fa-3x"></i>
        <p className="user-name" className="user-profile-title">{props.name} </p>
        
        <p className="user-profile-title">{props.ig_handle}</p>
      
      </section>
      
      <section className='user-posts'>
      <div className='add-post-container' onClick={() => newPostPush()} >
      +
      </div>
        <UserPosts posts={posts} />
      </section>
      <button className="logout-button" onClick={() => logout()}>Log Out</button>
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
