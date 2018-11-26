import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
class Signin extends React.Component {
constructor(props){
  super(props)
  this.state = {
   session: {
    email:'',
    password:''
   }
  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
   let newsession = this.state.session
   newsession = e.target.value
   this.setState({ session: newsession });
   console.log(this.state.newsession)
}

onSubmit(e){
    this.props.onSignIn(this.state.session)
}

  render() {
  return (
    <div class="container">
          <h3>Sign In</h3>
          <br/>
      <div class="form-signin-heading" onSubmit={ this.onSubmit }>
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
