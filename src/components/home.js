import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <br />
          <h4>Please Sign In or Sign Up</h4>
          <br />
          <Link to="/signin" className="btn btn-info" id="signin">
            Sign In
          </Link>
          &nbsp;
          <Link to="/signup" className="btn btn-info" id="signup">
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
