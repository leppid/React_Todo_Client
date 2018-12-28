import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SignUp from "../../components/users/signup";

class SignUpContainer extends React.Component {
  render() {
    const { onSignUp } = this.props;
    return <SignUp onSignUp={onSignUp} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onSignUp: user => {
    dispatch(signup(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
