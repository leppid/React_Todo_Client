import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../components/home";
import SignIn from "../components/users/signin";
import SignUp from "../components/users/signup";
import About from "../components/about";
import Activation from "../components/users/activation"

class Routess extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/about' component={About}/>
        <Route exact path="/activation" component={Activation} />
      </Switch>
    )
  }
}

export default Routess;
