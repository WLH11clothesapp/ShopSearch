//Register
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Register(props) {
  //first is the value the state is holding
  // the second value is a funtion to set the state
  // needs to have exact name. as name of input.
  const [state, setState] = useState({
    name: "",
    email: "",
    igHandle: "",
    password: ""
  });

  const handleChange = event => {
    setState({
      // need to spread operater ...state to pretect the other keys from being overidden.
      ...state,
      [event.target.name]: event.target.value
    });
    console.log(state);
    console.log(props);
  };

  const handleRegBtn = () => {
    console.log("hit registeresdefefs");
    axios
      .post("/auth/register", {
        name: state.name,
        email: state.email,
        igHandle: state.igHandle,
        password: state.password
      })
      .then(res => {
        console.log("hit register");

    const handleChange = event => {
        setState({ // need to spread operater ...state to pretect the other keys from being overidden.
            ...state, [event.target.name]: event.target.value
        })
        console.log(state)
        console.log(props)
    }
    const handleRegBtn = () => {
        axios.post('/auth/register', {
            name: state.name,
            email: state.email,
            igHandle: state.igHandle,
            password: state.password
        }).then(res => {
            props.history.push('/userprofile')
        }).catch(err => { console.log(err) })
    }


    return (
        <div className="register-page">

            <p className="register-info"> This is some information about why you should register for an account</p>
            <section className="register-form">
                <h6>Please complete this form</h6>
                <h5>Name:</h5>
                <input placeholder="Enter your first and last name"
                    name='name'
                    type='text'
                    value={state.name}
                    onChange={handleChange}
                />
                <h5> Email:</h5>
                <input placeholder="Enter your email"
                    name='email'
                    type='text'
                    value={state.email}
                    onChange={handleChange}
                />
                <h5>Instagram Handle:</h5>
                <input placeholder="Example: @yourstruly"
                    name='igHandle'
                    type='text'
                    value={state.igHandle}
                    onChange={handleChange}
                />
                <h5>Password:</h5>
                <input placeholder="Create your password"
                    name='password'
                    type='text'
                    value={state.password}
                    onChange={handleChange}
                />

                <button className="complete-registration" onClick={() => handleRegBtn()}> Register New Account</button>

            </section>
        </div>
    )
}

export default withRouter(Register);
