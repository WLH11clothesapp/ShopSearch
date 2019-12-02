//Register
import React from 'react';
import './Register.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/userReducer';
import { Link } from 'react-router-dom';

function Register(props) {
  //first is the value the state is holding
  // the second value is a function to set the state
  // needs to have exact name. as name of input.

  const handleRegBtn = () => {
    //passed into useForm to be called if tests are passed
    axios
      .post('/api/register', {
        name: state.name,
        email: state.email,
        igHandle: state.igHandle,
        password: state.password
      })
      .then(res => {
        props.updateUser();
        props.history.push('/userprofile');
      })
      .catch(err => {
        console.log(err);
      });
  };

  ///hook that handles state and verifies that value pass requirements when form is submitted
  let { state, handleChange, handleSubmit, errors } = useForm(
    handleRegBtn,
    false
  );

  return (
    <div className='register-page'>
      <div className='register-info'></div>
      <section className='register-form'>
        <p id="register-p">Create New Account</p>
        <section className="label-container">
          <label>Name <span className="star">*</span></label>
        </section>
        <input
          // placeholder='Enter your first and last name'
          name='name'
          type='text'
          value={state.name}
          onChange={handleChange}
          className={`${errors.name && 'inputError'}`} ///if tests are failed will turn border red
        />
        {errors.name && <p className='error'>{errors.name}</p>}{' '}
        {/* will display error messes for failed test */}
        <section className="label-container">
          <label>Email <span className="star">*</span></label>
        </section>
        <input
          // placeholder='Enter your email'
          name='email'
          type='text'
          value={state.email}
          onChange={handleChange}
          className={`${errors.email && 'inputError'}`}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
        <section className="label-container">
          <label>Instagram Handle</label>
        </section>
        <input
          // placeholder='Example: @yourstruly'
          name='igHandle'
          type='text'
          value={state.igHandle}
          onChange={handleChange}
          className={`${errors.igHandle && 'inputError'}`}
        />
        {errors.igHandle && <p className='error'>{errors.igHandle}</p>}
        <section className="label-container">
          <label>Password <span className="star">*</span></label>
        </section>
        <input
          // placeholder='Create your password'
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          className={`${errors.password && 'inputError'}`}
        />
        {errors.password && <p className='error'>{errors.password}</p>}
        <button
          className='complete-registration'
          onClick={() => handleSubmit()}
        >
          {' '}
          Register New Account
        </button>
        <div className="login-info-container">
          <p><span className="star">*</span> Required field</p>
          <p>Already have an account? <Link to="./login"><span id="signup-span">Login here</span></Link></p>
        </div>
      </section>
    </div>
  );
}

const mapDispatchToProps = {
  updateUser
};

export default connect(null, mapDispatchToProps)(withRouter(Register));
