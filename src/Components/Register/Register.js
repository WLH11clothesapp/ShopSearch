//Register
import React from "react";
import "./Register.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useForm } from '../../hooks/useForm'

function Register(props) {
  //first is the value the state is holding
  // the second value is a function to set the state
  // needs to have exact name. as name of input.
  
  const handleRegBtn = () => {  //passed into useForm to be called if tests are passed
      axios.post('/auth/register', {
          name: state.name,
          email: state.email,
          igHandle: state.igHandle,
          password: state.password
        }).then(res => {
            props.history.push('/userprofile')
        }).catch(err => { console.log(err) })
    }

      ///hook that handles state and verifies that value pass requirements when form is submitted
    let {state, handleChange, handleSubmit, errors} = useForm(handleRegBtn, false)  
    
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
                    className={`${(errors.name) && "inputError"}`}  ///if tests are failed will turn border red
                />
                {errors.name && <p className="error">{errors.name}</p>} {/* will display error messes for failed test */}
                
                <h5> Email:</h5>
                <input placeholder="Enter your email"
                    name='email'
                    type='text'
                    value={state.email}
                    onChange={handleChange}
                    className={`${(errors.email) && "inputError"}`}
                    
                />
                {errors.email && <p className="error">{errors.email}</p>}
                
                <h5>Instagram Handle:</h5>
                <input placeholder="Example: @yourstruly"
                    name='igHandle'
                    type='text'
                    value={state.igHandle}
                    onChange={handleChange}
                    className={`${(errors.igHandle) && "inputError"}`}

                />
                {errors.igHandle && <p className="error">{errors.igHandle}</p>}

                <h5>Password:</h5>
                <input placeholder="Create your password"
                    name='password'
                    type='password'
                    value={state.password}
                    onChange={handleChange}
                    className={`${(errors.password) && "inputError"}`}

                />
                {errors.password && <p className="error">{errors.password}</p>}
               

                <button className="complete-registration" onClick={() => handleSubmit()}> Register New Account</button>

            </section>
        </div>
    )
}

export default withRouter(Register);