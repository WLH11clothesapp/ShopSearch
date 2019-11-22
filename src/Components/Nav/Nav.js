import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import "../../../public/LogoOption1.png"

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentDidMount = () => {
    axios
      .get('/api/user')
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  logout = () => {
    axios
      .post('/api/logout')
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <nav className='nav'>
        {/* we need a ternary here: if there is NO user on session this nav will display, but if there IS a user on session, change register and login to profile and logout */}
        <Link to='/search'>
          <section>SEARCH</section>
        </Link>
        {/* we need to make a about component if we want an about page. */}
        <Link to='/about'>
          <section>ABOUT</section>
        </Link>
        <Link to='/'>
          <section>LOGO</section>
        </Link>
        {this.state.user === {} ? (
          <>
            <Link to='/user'>
              <section>PROFILE</section>
            </Link>
            <section onClick={this.logout}>LOG OUT</section>
          </>
        ) : (
          <>
            {' '}
            <Link to='/register'>
              <section>REGISTER</section>
            </Link>
            <Link to='/login'>
              <section>LOGIN</section>
            </Link>
          </>
        )}
      </nav>
    );
  }
}
export default Nav;
