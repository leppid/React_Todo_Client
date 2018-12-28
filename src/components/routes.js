import React from "react";
import { Switch, Route } from "react-router-dom";
import p404 from "../components/p404";
import Home from "../components/home";
import SignOut from "../containers/users/signOutContainer";
import SignIn from "../containers/users/signInContainer";
import SignUp from "../containers/users/signUpContainer";
import Tasks from "../components/tasks/tasks";
import TaskAdd from "../containers/tasks/taskAddContainer";
import TaskEdit from "../containers/tasks/taskEditContainer";
import TaskProfile from "../containers/tasks/taskProfileContainer";
import TasksDel from "../containers/tasks/tasksDelContainer";
import About from "../components/about";
import Activation from "../components/users/activation";
import { token } from "../components/constants/user";

class Routes extends React.Component {
  render() {
    if (token() && token().length === 60) {
      return (
        <Switch>
          <Route exact path="/" component={Tasks} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/deltasks" component={TasksDel} />
          <Route exact path="/tasks/:id" component={TaskProfile} />
          <Route exact path="/tasks/:id/edit" component={TaskEdit} />
          <Route exact path="/newtask" component={TaskAdd} />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/about" component={About} />
          <Route exact path="/activation" component={Activation} />
          <Route exact path="*" component={p404} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/activation" component={Activation} />
          <Route exact path="*" component={p404} />
        </Switch>
      );
    }
  }
}

export default Routes;
