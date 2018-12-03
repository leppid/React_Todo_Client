import React from "react";
import { connect } from "react-redux";
import { doneTask, deleteTask, getTask, getTasks } from "../../actions/tasks";
class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: "",
        checked: ""
    };
  }

  handleDone (id, active) {
    this.props.onDoneTask(id, active);
  }

  handleDelete (id) {
    this.props.onDeleteTask(id);
  }


  render() {
    return (
      <div class="container">
        <h3>Tasks</h3>
        <hr/>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onDoneTask: (id, done) => {
      dispatch(doneTask(id, done));
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    }
  })
)(TasksList);
