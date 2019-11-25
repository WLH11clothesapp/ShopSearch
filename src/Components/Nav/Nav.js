import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../redux/userReducer';
// import "../../../public/LogoOption1.png"

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      user_id: 0
    };
  }

  componentDidMount() {
    this.props.updateUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user_id !== this.props.user_id) {
      this.setState({
        user_id: this.props.user_id
      });
      console.log('hit');
    }
  }

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

        {/* we need to make a about component if we want an about page. */}

        <Link to='/'>
          <section className='logo-container'></section>
        </Link>

        <Link to='/about'>
          <section>ABOUT</section>
        </Link>
        {this.props.user_id !== 0 ? (
          <>
            <Link to='/userprofile'>
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
        <Link to='/search'>
          <section>
            <i className='fas fa-search'></i>
          </section>
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user_id, email, name, ig_handle } = reduxState;
  return {
    user_id,
    email,
    name,
    ig_handle
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
