import React from "react";
import { connect } from "react-redux";
import { signin } from "../../actions/sessions";
import SignIn from "../../components/users/signin";

class SignInContainer extends React.Component {
  render() {
    const { onSignIn } = this.props;
    return <SignIn onSignIn={onSignIn} />;
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
)(SignInContainer);
