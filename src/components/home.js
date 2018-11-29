import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { token } from './apiconfig';
class Home extends React.Component {
  render() {
   if (token && token.length === 60) {
    return (
      <div>
      <h4>Hello {localStorage.getItem('fullname')}!</h4>
      <br/>
    </div>
      )
  }else{
    return (
      <div>
        <h4>Please Sign In or Sign Up</h4>
        <br/>
        <Link to='/signin'className='btn btn-info'>Sign In</Link>&nbsp;
        <Link to='/signup'className='btn btn-info'>Sign Up</Link>
      </div>
    )
  }
  }
};

export default Home;
