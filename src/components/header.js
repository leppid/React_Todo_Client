import React from "react";
import { token, testtoken } from "./constants/user";

class Header extends React.Component {
  render() {
    if (token() && token().length === 60) {
      return (
        <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bgheader border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              <a
                className="btn btn-outline-primary mr-2"
                href="/"
                id="dashboard"
              >
                ToDo Dashboard
              </a>
              <a
                href="/deltasks"
                className="btn btn-outline-secondary mr-2"
                id="deltasks"
              >
                Delete Tasks
              </a>
              <a
                className="btn btn-outline-secondary mr-2"
                href="/newtask"
                id="addtask"
              >
                Add Task
              </a>
            </h5>
            <br />
            <a className="p-2 text-dark" href="#">
              {localStorage.getItem("fullname")}
            </a>
            <a className="btn btn-outline-primary ml-1" href="/signout">
              Sign Out
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bgheader border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              <a href="/" id="logo">
                ToDoApp
              </a>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <a className="p-2 text-dark" href="/about">
                About
              </a>
            </nav>
            <a className="btn btn-outline-primary" href="/signin" id="signin">
              Sign in
            </a>
            &nbsp;
            <a className="btn btn-outline-primary" href="/signup" id="signup">
              Sign up
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Header;
