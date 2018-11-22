import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
class Signup extends React.Component {
  render() {
  return (
    <div class="container">
    <h3>Sign Up</h3>
    <br/>
    <div class="form-signin-heading">
      <form>
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

export default Signup;
