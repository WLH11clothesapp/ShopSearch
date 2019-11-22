import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import "../../../public/LogoOption1.png" 

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
                <Link to='/search'><section>SEARCH</section></Link>
                {/* we need to make a about component if we want an about page. */}
                <Link to='/about'><section>ABOUT</section></Link>
                <Link to='/'><img src=""/></Link>
                <Link to='/register'><section>REGISTER</section></Link>
                <Link to='/login'><section>LOGIN</section></Link>
            </nav>
            
        )
    };
}
export default Nav;
