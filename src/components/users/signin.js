import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { signin } from '../../actions/sessions'
class SignIn extends React.Component {

  constructor(props){
  super(props)
  this.state = {
   session: {
    email:'',
    password:'',
    errors: '',
    message: ''
   }
  }
}

handleSubmit(e) {
  e.preventDefault()
  this.props.onSignIn(this.state.session)
  console.log(this.state.session)
}

handleChange(field,e) {
let newsession = Object.assign(this.state.session)
newsession[field] = e.target.value
this.setState({session: newsession})
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
              onChange={this.handleChange.bind(this, 'email')}
						/>
						<br />
    				<input
							className = 'form-control'
							type='password'
							placeholder='Password'
              name='password'
              onChange={this.handleChange.bind(this, 'password')}

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

export default connect(
state => ({}),
dispatch => ({
  onSignIn: (sessions) => {
    dispatch(signin(sessions))
  }
})) (SignIn);
