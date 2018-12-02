
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Router, Link, Redirect } from 'react-router-dom';
import Routess from "./components/routes";
import Header from './components/header';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import hist from './services/hist'
import NotificationsSystem from 'reapop'
import theme from 'reapop-theme-bootstrap'
import 'babel-polyfill'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Router history={hist}>
    <div>
      <div>
        <Header />
      </div>
      <br/>
      <Provider store={store}>
        <center> <Routess /><NotificationsSystem theme={theme} /></center>
       </Provider>
    </div>
  </Router>, document.getElementById("root"));
