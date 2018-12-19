import React from "react";
import { connect } from "react-redux";
import { signin } from "../../actions/sessions";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSignIn(this.state.session);
    console.log(this.state.session);
  }

  handleChange(field, e) {
    const newsession = Object.assign(this.state.session);
    ``;
    newsession[field] = e.target.value;
    this.setState({ session: newsession });
  }

  render() {
    return (
      <div className="container" onSubmit={this.handleSubmit.bind(this)}>
        <h3>Sign In</h3>
        <br />
        <div className="form-signin-heading">
          <form>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              id="email"
              onChange={this.handleChange.bind(this, "email")}
            />
            <br />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.handleChange.bind(this, "password")}
            />
            <br />
            <input
              className="btn btn-info"
              type="submit"
              value="Sign In"
              id="submit"
            />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onSignIn: session => {
    dispatch(signin(session));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
