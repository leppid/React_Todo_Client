import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { usrlog } from '../actions/user'
import { connect } from 'react-redux';

class SignUp extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    usrlog()
  }

  render() {
    this.props.dispatch({ type: 'aaa', payload: [{title: 1}] })

    console.log(this.props)
  return (
    <div class="container">
    <h3>Sign Up</h3>
    <br/>
    <div class="form-signin-heading">
      <form onSubmit={this.handleSubmit.bind(this)}>
						<input
							className = 'form-control'
							type='text'
							placeholder='Name'
							name='name'
						/>
						<br />
						<input
					  	className = 'form-control'
							type='text'
							placeholder='Secondname'
							name='secondname'
						/>
						<br />
						<input
							className = 'form-control'
							type='email'
							placeholder='Email'
							name='email'
						/>
						<br />
						<input
							className = 'form-control'
							type='password'
							placeholder='Password'
							name='password'
						/>
						<br />
						<input
							className = 'btn btn-info'
							type='submit'
							value='Submit'
						/>
						<br />
					</form>
          </div>
    </div>
  )
  }
};

export default connect()(SignUp);
