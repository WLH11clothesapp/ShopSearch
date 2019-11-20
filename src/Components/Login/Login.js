import React from 'react'
import './Login.css'

export default function Login(){
    return(
        <div className="login-page">
            <nav className="placeholder">When our nav component is wireframed, we can add it here. This nav is a placeholder for now</nav>
            
            <p className="login-info"> Are you new to ti.wonkotekil? Click here to Register new account (add link here)</p>
            
            <section className="login-form">
                <h6>Welcome back, user! Please enter your account information</h6>
                
                <h5> Email:</h5>
                <input placeholder="Enter your email"/>
            
                <h5>Password:</h5>
                <input placeholder="Enter your password"/>
                <br/>
                <button className="complete-login"> Log In</button>

                

            </section>
            <footer className="login-footer">If we have enough time, lets add some fun graphic here to fill space. Maybe a "did you know?" fact about our brand or an image </footer>
        </div>
    )
}
