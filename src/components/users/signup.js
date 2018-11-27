import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/user'
import { connect } from 'react-redux';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
       firstname: '',
       lastname: '',
       email: '',
       password_digest: '',
       password_confirmation: ''

      }
    }
  }


  handleSubmit(e) {
    e.preventDefault()
    this.props.onSignUp(this.state.user)
    console.log(this.state.user)
  }

  handleChange(field,e) {
  let newuser = Object.assign(this.state.user)
  newuser[field] = e.target.value
  this.setState({user: newuser})
  }


  render() {
  return (
    <div class="container">
    <h3>Sign Up</h3>
    <br/>
    <div class="form-signin-heading">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>
              <input
                className='form-control'
                placeholder="Email"
                type="text"
                onChange={this.handleChange.bind(this, 'email')}
                minLength="8"

              />
              <br/>
              <input
                className='form-control'
                placeholder="Firstname"
                type="text"
                onChange={this.handleChange.bind(this, 'firstname')}
                pattern='[A-Za-z]{3,10}'

              />
              <br/>
              <input
                className='form-control'
                placeholder="Lastname"
                type="text"
                onChange={this.handleChange.bind(this, 'lastname')}
                pattern='[A-Za-z]{4,12}'
                required
              />
              <br/>
              <input
                className='form-control'
                placeholder="Password"
                type="password"
                onChange={this.handleChange.bind(this, 'password_digest')}
                minLength="6"
                required
              />
              <br/>
              <input
                className='form-control'
                placeholder="PasswordConfirmation"
                type="password"
                onChange={this.handleChange.bind(this, 'password_confirmation')}
                minLength="6"
                required
              />
              <br />
              <input
               className = 'btn btn-info'
               type='submit'
               value='Submit'
                     />
              <br />
</div>
    </form>
</div>
</div>
  )
  }
};

export default connect(
state => ({}),
dispatch => ({
  onSignUp: (user) => {
    dispatch(signUp(user));
  }
}))(SignUp);
