import React from 'react'
import './Nav.css'

class Nav extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <nav className="nav">
                {/* we need a ternary here: if there is NO user on session this nav will display, but if there IS a user on session, change register and login to profile and logout */}
                <section>SEARCH</section>
                <section>ABOUT</section>
                <section>LOGO</section>
                <section>REGISTER</section>
                <section>LOGIN</section>
            </nav>
            
        )
    };
}
export default Nav;
