import React from "react";
import { connect } from "react-redux";
import { emailActivation } from '../../actions/users';

class Activation extends React.Component {

  componentDidMount() {
    const { search } = this.props.location
    const token = search.replace('?token=', '')
    console.log(token)
    this.props.onEmailActivation(token);
  }
  render() {
    return(
      <div>
      </div>
    );
  }

}

export default connect(ownProps => ({
  ownProps
}),
dispatch => ({
  onEmailActivation: (token) => {
    dispatch(emailActivation(token));
  }
}))(Activation)
