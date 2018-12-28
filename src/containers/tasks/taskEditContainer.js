import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTask, editTask } from "../../actions/tasks";
import TaskEdit from "../../components/tasks/taskedit";
import PropTypes from "prop-types";

class TaskEditContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.context.store.dispatch(getTask(id));
  }

  render() {
    const { task, onEditTask } = this.props;
    return (
      <Fragment>
        {task.id && <TaskEdit task={task} onEditTask={onEditTask} />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  task: state.task.item
});

const mapDispatchToProps = dispatch => ({
  onEditTask: task => {
    dispatch(editTask(task));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEditContainer);
