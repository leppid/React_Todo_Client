
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Link, Redirect } from 'react-router-dom';
import Routess from "./components/routes";
import Header from './components/header';
import style from "./bootstrap.min.css";
import styletwo from "./other.css";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <div>
        <Header />
      </div>
      <br/>
       <center> <Routess /></center>
    </div>
  </BrowserRouter>, document.getElementById("root"));
