import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../components/home";
import Signin from "../components/signin";
import SignUp from "../components/signup";
import About from "../components/about";

class Routess extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    )
  }
}

export default Routess;
