import React from "react";
import ReactDOM from "react-dom";
class Header extends React.Component {
  render() {
  return (
    <div>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal"><a href="/">ToDoApp</a></h5>
      <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" href="/about">About</a>
      </nav>
      <a class="btn btn-outline-primary" href="/signin" >Sign in</a>&nbsp;
      <a class="btn btn-outline-primary" href="/signup">Sign up</a>
      </div>
    </div>
      )
  }
};

export default Header;
