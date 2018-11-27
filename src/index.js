
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Link, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Routess from "./components/routes";
import Header from './components/header';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <BrowserRouter history={browserHistory}>

    <div>
      <div>
        <Header />
      </div>
      <br/>
      <Provider store={store}>
        <center> <Routess /></center>
       </Provider>
    </div>
  </BrowserRouter>, document.getElementById("root"));
