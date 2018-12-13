import React from "react";
import hist from "../../services/hist";

class SignOut extends React.Component {
  componentDidMount() {
    localStorage.removeItem("activation_digest");
    localStorage.removeItem("email");
    localStorage.removeItem("fullname");
    hist.push("/");
    location.reload();
  }

  render() {
    return <div />;
  }
}

export default SignOut;
