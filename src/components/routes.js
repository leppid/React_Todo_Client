import React from "react";
import { Switch, Route } from 'react-router-dom';
import p404 from '../components/p404'
import Home from "../components/home";
import SignOut from "../components/users/signout";
import SignIn from "../components/users/signin";
import SignUp from "../components/users/signup";
import Tasks from "../components/tasks/tasks";
import About from "../components/about";
import Activation from "../components/users/activation"
import { token } from './apiconfig'

class Routess extends React.Component {
  render()
  {
    if (token && token.length === 60) {
    return(
      <Switch>
        <Route exact path='/' component={Tasks}/>
        <Route exact path='/tasks' component={Tasks}/>
        <Route exact path='/signout' component={SignOut}/>
        <Route exact path='/about' component={About}/>
        <Route exact path="/activation" component={Activation} />
        <Route exact path='*' component={p404}/>
      </Switch>
    )
  }else{
    return(
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/signin' component={SignIn}/>
    <Route exact path='/signup' component={SignUp}/>
    <Route exact path='/about' component={About}/>
    <Route exact path="/activation" component={Activation} />
    <Route exact path='*' component={p404}/>
  </Switch>
    )
  }
 }
}

export default Routess;
