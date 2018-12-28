import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask, deleteCheckedTasks } from "../../actions/tasks";
import TasksDel from "../../components/tasks/tasksdel";
import PropTypes from "prop-types";

class TaskDelContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    this.context.store.dispatch(getTasks());
  }

  render() {
    const { tasks, onDeleteTask, onDeleteChecked } = this.props;
    return (
      <Fragment>
        {tasks.length && (
          <TasksDel
            tasks={tasks}
            onDeleteChecked={onDeleteChecked}
            onDeleteTask={onDeleteTask}
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
  },
  onDeleteChecked: ids => {
    dispatch(deleteCheckedTasks(ids));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDelContainer);
