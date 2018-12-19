import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Routes from "./components/routes";
import Header from "./components/header";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import hist from "./services/hist";
import NotificationsSystem from "reapop";
import theme from "reapop-theme-bootstrap";
import "babel-polyfill";
import logger from "redux-logger";
import "!style-loader!css-loader!font-awesome/css/font-awesome.min.css";
import css from "./main.css";

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Router history={hist}>
    <div>
      <div>
        <Header />
      </div>
      <Provider store={store}>
        <center>
          <Routes />
          <NotificationsSystem theme={theme} />
        </center>
      </Provider>
    </div>
  </Router>,
  document.getElementById("root")
);
