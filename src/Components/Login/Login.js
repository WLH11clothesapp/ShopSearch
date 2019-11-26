import React, { useRef } from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import './Login.css';
import { updateUser } from '../../redux/userReducer';
import { connect } from 'react-redux';

function Login(props) {
  // const loginButton = useRef(null);

  function handleClick() {
    console.log('login handle click hit');
    axios
      .post('/api/login', {
        email: state.email,
        password: state.password
      })
      .then(res => {
        props.updateUser(res.data);
        props.history.push('/userprofile');
      })
      .catch(err => console.log(err));
  }

  let { state, handleChange, handleSubmit, errors } = useForm(
    handleClick,
    true
  );

  return (
    <div className='login-page'>
      <p className='login-info'>
        Are you new to ti.wonkotekil? Click here to Register new account
        <Link to='/register'>
          <button>here</button>
        </Link>
      </p>

      <section className='login-form'>
        <h6>Welcome back, user! Please enter your account information</h6>
        <h5> Email:</h5>
        <input
          name='email'
          value={state.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className={`${errors.email && 'inputError'}`}
        />{' '}
        {/*used to make boarder red when test failed*/}
        {errors.email && <p className='error'>{errors.email}</p>}{' '}
        {/* display message when test fail */}
        {/* styles for errors are in regester.scss*/}
        <h5>Password:</h5>
        <input
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          placeholder='Enter your password'
          className={`${errors.password && 'inputError'}`}
        />
        <br />
        {errors.email && <p className='error'>{errors.password}</p>}
        <button
          id='login-button'
          className='complete-login'
          // ref={loginButton}
          onClick={handleSubmit}
        >
          {' '}
          Log In
        </button>
      </section>
      <footer className='login-footer'>
        If we have enough time, lets add some fun graphic here to fill space.
        Maybe a "did you know?" fact about our brand or an image{' '}
      </footer>
    </div>
  );
}

const mapDispatchToProps = {
  updateUser
};

export default connect(null, mapDispatchToProps)(Login);
