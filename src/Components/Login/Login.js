import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import './Login.css';
import { updateUser } from '../../redux/userReducer';
import { connect } from 'react-redux';


function Login(props) {
  
  //get passed into useForm as callback that gets called when handleSubmit is called
  async function handleClick() {  
    console.log('login handle click hit');
    let passValue = await axios
      .post('/api/login', {
        email: state.email,
        password: state.password
      })
      .then(res => {
        props.updateUser(res.data);
        props.history.push('/userprofile');
      })
      .catch(err => {console.log(typeof err);
         return err.response.data})
    console.log('passValue', passValue)
    return await passValue
  } 

  let { state, handleChange, handleSubmit, errors} = useForm( handleClick, true );

  // React.useEffect(() => {
  //   console.log('state', state)
  //   console.log('errors',errors)
  // }, [state, errors])

  return (
    <div className='login-page'>
      
      <section className="login-logo"></section>
      <section className='login-form'>
        <p id="login-title">Login</p>
       <section className="label-container">
          <label>Email <span className="star">*</span></label>
        </section>
        <input
          name='email'
          value={state.email}
          onChange={handleChange}
          // placeholder='Enter your email'
          className={`${errors.email && 'inputError'}`}
        />
        {/*used to make boarder red when test failed*/}
        {errors.email && <p className='error'>{errors.email}</p>}{' '}
        {/* display message when test fail */}
        {/* styles for errors are in regester.scss*/}
        <section className="label-container">
          <label>Password <span className="star">*</span></label>
        </section>
        <input
          className="input-style"
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          // placeholder='Enter your password'
          className={`${errors.password && 'inputError'}`}
        />
        {errors.password && <p className='error'>{errors.password}</p>}
        <div className="button-border-login">
        <button
          id='login-button'
          className="complete-login"
          onClick={handleSubmit}
        >Log In</button>
        <div className="login-info-container">
          <p><span className="star">*</span> Required field</p>
          <p>New to Love to Know? <Link to="./register"><span id="signup-span">Sign up for free</span></Link></p>
        </div>
        </div>
         
        
      </section>
     
    </div>
  );
}

const mapDispatchToProps = {
  updateUser
};

export default connect(null, mapDispatchToProps)(Login);
