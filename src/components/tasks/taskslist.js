import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class TasksList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        priority: PropTypes.number.isRequired,
        done: PropTypes.bool
      })
    )
  };

  handleDelete(id) {
    this.props.onDeleteTask(id);
  }

  render() {
    let tasks = this.props.tasks ? this.props.tasks : [];
    return (
      <div>
        <label className="mr-2">Sort by:</label>
        <a
          className="btn btn-light active mr-1"
          onClick={this.props.sortByTitle}
        >
          Title
        </a>
        <a
          className="btn btn-light active mr-1"
          onClick={this.props.sortByPriority}
        >
          Priority
        </a>
        <hr />
        <div className="row mb-2">
          {tasks.map(task => {
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
                <div id="id" key={task.id} className="col-md-6">
                  <div className="card flex-md-row mb-4 shadow-sm h-md-250 bgprofile">
                    <div className="card-body d-flex flex-column align-items-start">
                      <h3>
                        <div className="" id="title">
                          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                        </div>
                      </h3>
                      <div className={definePriorCalss} id="priority">
                        {definePriority}
                      </div>
                      <br />
                      <button
                        className="btn btn-outline-danger"
                        onClick={this.handleDelete.bind(this, task.id)}
                        id="delbtn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          {tasks.map(task => {
            if (task.done) {
              return (
                <div id="key" key={task.id} className="col-md-6">
                  <div className="card flex-md-row mb-4 shadow-sm h-md-250 bgprofile">
                    <div className="card-body d-flex flex-column align-items-start">
                      <h3>
                        <div className="" id="title">
                          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                        </div>
                      </h3>
                      <div className="btn btn-success">Completed</div>
                      <br />
                      <button
                        className="btn btn-outline-danger"
                        onClick={this.handleDelete.bind(this, task.id)}
                        title="Delete"
                        id="delbtn"
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

export default TasksList;
