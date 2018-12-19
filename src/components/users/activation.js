import React from "react";
import { connect } from "react-redux";
import { emailActivation } from "../../actions/users";

class Activation extends React.Component {
  componentDidMount() {
    const { search } = this.props.location;
    const token = search.replace("?token=", "");
    console.log(token);
    this.props.onEmailActivation(token);
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onEmailActivation: token => {
    dispatch(emailActivation(token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activation);
