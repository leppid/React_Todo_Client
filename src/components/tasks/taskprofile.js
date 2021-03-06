import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTask, deleteTask, doneTask } from "../../actions/tasks";
import hist from "../../services/hist";
import PropTypes from "prop-types";

class TaskProfile extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      duedate: PropTypes.string.isRequired,
      done: PropTypes.bool
    })
  };

  handleDelete(id) {
    this.props.onDeleteTask(id);
    this.setState(() => ({ task: {} }));
    hist.push("/");
  }

  handleDone(id, done) {
    this.props.onDoneTask(id, done);
    hist.push("/tasks");
  }

  render() {
    const { task } = this.props;
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
      <div align="center">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 shadow-sm bgprofile">
            <div className="card-body text-center">
              <h2>
                <label className="">{task.title}</label>
              </h2>
              <hr />
              <h4>
                <label className="">{task.description}</label>
              </h4>
              <br />
              <span className={definePriorCalss}>{definePriority}</span>
              <span className="btn btn-outline-primary ml-2">
                Need to do to {task.duedate}
              </span>
              <br />
              <br />
              <h3>
                <span
                  className={
                    !task.done
                      ? "btn btn-dark"
                      : task.done
                      ? "btn btn-success"
                      : ""
                  }
                >
                  {!task.done ? "Active" : task.done ? "Completed" : ""}
                </span>
              </h3>
              <hr />
              <span
                id="btndone"
                className={
                  !task.done
                    ? "btn btn-outline-success mr-2"
                    : task.done
                    ? "btn btn-outline-dark mr-2"
                    : ""
                }
                onClick={this.handleDone.bind(this, task.id, task.done)}
              >
                {!task.done ? "Complete" : task.done ? "Activate" : ""}
              </span>
              <Link to={`/tasks/${task.id}/edit`}>
                <span className="btn btn-outline-warning mr-2">Edit</span>
              </Link>
              <span
                id="btndelete"
                className="btn btn-outline-danger"
                onClick={this.handleDelete.bind(this, task.id)}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskProfile;
