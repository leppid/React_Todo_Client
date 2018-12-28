import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask } from "../../actions/tasks";
import TasksList from "../../components/tasks/taskslist";
import PropTypes from "prop-types";
import {
  SORT_TASKS_BY_TITLE,
  SORT_TASKS_BY_PRIORITY
} from "../../actions/actionTypes";

class TaskListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    this.context.store.dispatch(getTasks());
  }

  sortByTitle() {
    this.context.store.dispatch({ type: "SORT_TASKS_BY_TITLE" });
    this.forceUpdate();
  }

  sortByPriority() {
    this.context.store.dispatch({ type: "SORT_TASKS_BY_PRIORITY" });
    this.forceUpdate();
  }

  render() {
    const { tasks, onDeleteTask } = this.props;
    return (
      <Fragment>
        {tasks.length && (
          <TasksList
            tasks={tasks}
            onDeleteTask={onDeleteTask}
            sortByTitle={this.sortByTitle.bind(this)}
            sortByPriority={this.sortByPriority.bind(this)}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.items
});

const mapDispatchToProps = dispatch => ({
  onDeleteTask: id => {
    dispatch(deleteTask(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListContainer);
