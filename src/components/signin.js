import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
class Signin extends React.Component {
constructor(props){
  super(props)
  this.state = {
    email:'',
    password:''
  }

  this.onChange = this.onChange.bind(this);
}

onChange(e){
  this.setState({email: e.target.value})
  console.log(this.state)
}

  render() {
  return (
    <div class="container">
          <h3>Sign In</h3>
          <br/>
      <div class="form-signin-heading">
			<form >
				   <input
							className = 'form-control'
							type='email'
							placeholder='Email'
              name='email'
              onChange={this.onChange}
						/>
						<br />
    				<input
							className = 'form-control'
							type='password'
							placeholder='Password'
              name='password'
              onChange={this.onChange}

						/>
						<br />
						<input
							className = 'btn btn-info'
							type='submit'
              value='Sign In'
              onChange={this.login}
						/>
						<br />
					</form>
          </div>
    </div>
  )
  }
};

export default Signin;
