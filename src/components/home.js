import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
class Home extends React.Component {
  render() {
  return (
    <div>
      <h4>Please Sign In or Sign Up</h4>
      <br/>
      <Link to='/signin'className='btn btn-info'>Sign In</Link>&nbsp;
      <Link to='/signup'className='btn btn-info'>Sign Up</Link>
    </div>
  )
  }
};

export default Home;
