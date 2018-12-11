import React from "react";
import { connect } from "react-redux";
import { doneTask, deleteTask, getTask, getTasks } from "../../actions/tasks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    this.context.store.dispatch(getTasks());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tasks: nextProps.tasks });
  }

  handleDone(id, active) {
    this.props.onDoneTask(id, active);
  }

  handleDelete(id) {
    this.props.onDeleteTask(id);
  }

  render() {
    return (
      <div className="row mb-2">
        {this.props.tasks.map(task => {
          if (!task.done) {
            const definePriorCalss =
              task.priority === 1
                ? "btn btn-primary"
                : task.priority === 2
                ? "btn btn-warning"
                : task.priority === 3
                ? "btn btn-secondary"
                : "";
            const definePriority =
              task.priority === 1
                ? "High"
                : task.priority === 2
                ? "Medium"
                : task.priority === 3
                ? "Low"
                : "";
            return (
              <div key={task.id} className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250 bgprofile">
                  <div className="card-body d-flex flex-column align-items-start">
                    <h3>
                      <div className="">
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                      </div>
                    </h3>
                    <div className={definePriorCalss}>{definePriority}</div>
                    <br />
                    <button
                      className="btn btn-outline-danger"
                      onClick={this.handleDelete.bind(this, task.id)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {this.props.tasks.map(task => {
          if (task.done) {
            return (
              <div key={task.id} className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250 bgprofile">
                  <div className="card-body d-flex flex-column align-items-start">
                    <h3>
                      <div className="">
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                      </div>
                    </h3>
                    <div className="btn btn-success">Task Done</div>
                    <br />
                    <button
                      className="btn btn-outline-danger"
                      onClick={this.handleDelete.bind(this, task.id)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.items
});

const mapDispatchToProps = dispatch => ({
  onDoneTask: (id, done) => {
    dispatch(doneTask(id, done));
  },
  onDeleteTask: id => {
    dispatch(deleteTask(id));
  }
});

// eslint-disable-next-line react-redux/connect-prefer-named-arguments
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
