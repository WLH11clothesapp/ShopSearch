import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './Login.css'

export default function Login(props){
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    } 

    function handleClick () {
        console.log('props', props)
        axios.post('/api/login', {
            email:state.email,
            password: state.password
        }).then(res => {
            props.history.push('/userprofile')

        }).catch(err => console.log(err))
    }

    return(
        <div className="login-page">
            <nav className="placeholder">When our nav component is wireframed, we can add it here. This nav is a placeholder for now</nav>
            
            <p className="login-info"> Are you new to ti.wonkotekil? Click here to Register new account <Link to='/register'><button>here</button></Link></p>
            
            <section className="login-form">
                <h6>Welcome back, user! Please enter your account information</h6>
                
                <h5> Email:</h5>
                <input 
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Enter your email"/>
            
                <h5>Password:</h5>
                <input 
                    name='password'
                    type='password'
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Enter your password"/>
                <br/>
                <button className="complete-login" onClick={(e) => {console.log('e', e); handleClick()} }> Log In</button>

            </section>
            <footer className="login-footer">If we have enough time, lets add some fun graphic here to fill space. Maybe a "did you know?" fact about our brand or an image </footer>
        </div>
    )
}
