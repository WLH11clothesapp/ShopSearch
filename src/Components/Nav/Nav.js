import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, resetUser } from '../../redux/userReducer';

class Nav extends React.Component {
  componentDidMount = () => {
    // console.log('nav mounted')
    axios
      .get('/api/user')
      .then(res => {
        this.props.updateUser(res.data);
        console.log('nav .then hit ', res.data);
      })
      .catch(err => console.log('err hit', err));
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      axios
        .get('/api/user')
        .then(res => {
          this.props.updateUser(res.data);
          console.log('nav .then hit ', res.data);
        })
        .catch(err => console.log('err hit', err));
      console.log('nav didUpdate hit');
    }
  }

  logout = () => {
    axios
      .post('/api/logout')
      .then(() => {
        this.props.resetUser();
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <nav className='nav'>
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
            <section onClick={() => this.logout()}>LOG OUT</section>
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
  updateUser,
  resetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
