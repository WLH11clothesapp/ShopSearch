//Register
import React from 'react'
import './Register.css'

export default function Register(){
    return(
        <div className="register-page">
            <nav className="placeholder">When our nav component is wireframed, we can add it here. This nav is a placeholder for now</nav>
            
            <p className="register-info"> This is some information about why you should register for an account</p>
            <section className="register-form">
                <h6>Please complete this form</h6>
                <h5>Name:</h5>
                <input placeholder="Enter your first and last name"/>
                <h5> Email:</h5>
                <input placeholder="Enter your email"/>
                <h5>Instagram Handle:</h5>
                <input placeholder="Example: @yourstruly"/>
                <h5>Password:</h5>
                <input placeholder="Create your password"/>
                
                <button className="complete-registration"> Register New Account</button>

            </section>
        </div>
    )
}