import React from "react";
import ReactDOM from "react-dom";
import { token } from "./apiconfig";

class Header extends React.Component {
  render() {
    if (token && token.length === 60) {
      return (
        <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bgheader border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              <a className="btn btn-outline-primary mr-2" href="/">
                ToDo Dashboard
              </a>
              <a className="btn btn-outline-secondary mr-2" href="/newtask">
                Add Task
              </a>
              <a href="/deltasks" className="btn btn-outline-secondary mr-1">
                Delete Tasks
              </a>
            </h5>
            <a className="p-2 text-dark" href="#">
              {localStorage.getItem("fullname")}
            </a>
            &nbsp;
            <a className="btn btn-outline-primary" href="/signout">
              Sign Out
            </a>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bgheader border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            <a href="/">ToDoApp</a>
          </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="/about">
              About
            </a>
          </nav>
          <a className="btn btn-outline-primary" href="/signin">
            Sign in
          </a>
          &nbsp;
          <a className="btn btn-outline-primary" href="/signup">
            Sign up
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
