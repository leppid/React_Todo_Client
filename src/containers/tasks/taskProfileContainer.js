import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTask, deleteTask, doneTask } from "../../actions/tasks";
import TaskProfile from "../../components/tasks/taskprofile";

class TaskEditContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onGetTask(id);
  }

  render() {
    const { task, onDeleteTask, onDoneTask } = this.props;
    return (
      <Fragment>
        {task.id && (
          <TaskProfile
            task={task}
            onDeleteTask={onDeleteTask}
            onDoneTask={onDoneTask}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  task: state.task.item
});

const mapDispatchToProps = dispatch => ({
  onGetTask: id => {
    dispatch(getTask(id));
  },
  onDeleteTask: id => {
    dispatch(deleteTask(id));
  },
  onDoneTask: (id, done) => {
    dispatch(doneTask(id, done));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEditContainer);
