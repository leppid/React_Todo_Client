import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        errors: "",
        message: ""
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSignUp(this.state.user);
  }

  handleChange(field, e) {
    const newuser = Object.assign(this.state.user);
    newuser[field] = e.target.value;
    this.setState({ user: newuser });
  }

  render() {
    return (
      <div className="container">
        <div className="error-text" name="errors">
          {this.state.errors}
        </div>
        <h3>Sign Up</h3>
        <br />
        <div className="form-signin-heading">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                id="email"
                onChange={this.handleChange.bind(this, "email")}
                minLength="8"
              />
              <br />
              <input
                className="form-control"
                placeholder="Firstname"
                type="text"
                id="firstname"
                onChange={this.handleChange.bind(this, "firstname")}
                pattern="[A-Za-z]{3,10}"
              />
              <br />
              <input
                className="form-control"
                placeholder="Lastname"
                type="text"
                id="lastname"
                onChange={this.handleChange.bind(this, "lastname")}
                pattern="[A-Za-z]{4,12}"
                required
              />
              <br />
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                id="password"
                onChange={this.handleChange.bind(this, "password")}
                minLength="6"
                required
              />
              <br />
              <input
                className="form-control"
                placeholder="PasswordConfirmation"
                type="password"
                onChange={this.handleChange.bind(this, "password_confirmation")}
                minLength="6"
                required
              />
              <br />
              <input
                className="btn btn-info"
                type="submit"
                value="Submit"
                id="submit"
              />
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
