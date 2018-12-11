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

  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        priority: PropTypes.number,
        done: PropTypes.bool
      })
    )
  };

  componentDidMount() {
    this.context.store.dispatch(getTasks());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tasks: nextProps.tasks });
  }

  handleDelete(id) {
    this.props.onDeleteTask(id);
  }

  handleSortByTitle() {
    let tasks = [...this.props.tasks];
    tasks.sort((a, b) => {
      return a.title > b.title;
    });
    this.setState(() => ({
      tasks: tasks
    }));
  }

  handleSortByPrior() {
    let tasks = [...this.props.tasks];
    tasks.sort((a, b) => {
      return a.priority > b.priority;
    });
    this.setState(() => ({
      tasks: tasks
    }));
  }

  render() {
    return (
      <div>
        <label className="mr-2">Sort by:</label>
        <a
          className="btn btn-light active mr-1"
          onClick={this.handleSortByTitle.bind(this)}
        >
          Title
        </a>
        <a
          className="btn btn-light active mr-1"
          onClick={this.handleSortByPrior.bind(this)}
        >
          Priority
        </a>
        <hr />
        <div className="row mb-2">
          {this.state.tasks.map(task => {
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
          {this.state.tasks.map(task => {
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
