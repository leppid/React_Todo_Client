import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTask, addTask } from "../../actions/tasks";
import TaskAdd from "../../components/tasks/taskadd";
import PropTypes from "prop-types";

class TaskAddContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  render() {
    const { onAddTask } = this.props;
    return (
      <Fragment>
        <TaskAdd onAddTask={onAddTask} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTask: task => {
    dispatch(addTask(task));
  }
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskAddContainer);
