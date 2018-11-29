import React from "react";
import { connect } from "react-redux";
import { emailActivation } from '../../actions/users';
import hist from '../../services/hist'

class SignOut extends React.Component {

  componentDidMount() {
    localStorage.removeItem('activation_digest');
    localStorage.removeItem('email');
    localStorage.removeItem('fullname');
    hist.push('/')
    location.reload()
  }
  render() {
    return (
      <div>
      </div>
    );
  }

}

export default (SignOut)
