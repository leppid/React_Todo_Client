import React from "react";
import { connect } from "react-redux";
import {
  doneTask,
  deleteTask,
  deleteCheckedTasks,
  getTasks
} from "../../actions/tasks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class TasksDel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      checked: []
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

  handleCheck(task) {
    let tasks = this.state.checked;
    let index = tasks.indexOf(task);
    const newArray = this.state.checked;
    if (index !== -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(task);
    }
    this.setState(() => ({ checked: newArray }));
  }

  handleDeleteChecked() {
    this.props.onDeleteChecked(this.state.checked);
  }

  handleMarkAll() {
    const checkedTasks = [];
    this.props.tasks.map(task => {
      checkedTasks.push(task.id);
    });
    this.setState(() => ({ checked: checkedTasks }));
  }

  handleUnMarkAll() {
    this.setState({ checked: [] });
  }

  isChecked = id => {
    if (this.state.checked.indexOf(id) === -1) return false;
    return true;
  };

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-outline-dark mr-2"
          onClick={this.handleMarkAll.bind(this)}
        >
          Mark all
        </button>
        <button
          className="btn btn-outline-dark mr-2"
          onClick={this.handleUnMarkAll.bind(this)}
        >
          Unmark all
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={this.handleDeleteChecked.bind(this)}
        >
          Delete Tasks
        </button>

        <hr />
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
                      <br />
                      <h3>
                        <div className="">
                          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                        </div>
                      </h3>
                      <div className={definePriorCalss}>{definePriority}</div>
                      <br />
                      <label className="containerr">
                        <input
                          type="checkbox"
                          name="makerType"
                          checked={this.isChecked(task.id)}
                          onChange={this.handleCheck.bind(this, task.id)}
                        />
                        <span class="checkmark" />
                      </label>
                      <br />
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
                      <label className="containerr">
                        <input
                          type="checkbox"
                          name="makerType"
                          checked={this.isChecked(task.id)}
                          onChange={this.handleCheck.bind(this, task.id)}
                        />
                        <span class="checkmark" />
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
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
  },
  onDeleteChecked: ids => {
    dispatch(deleteCheckedTasks(ids));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksDel);
