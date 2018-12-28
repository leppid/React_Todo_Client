import React from "react";
import { connect } from "react-redux";
import { editTask, getTask } from "../../actions/tasks";
import PropTypes from "prop-types";

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description, priority, duedate, done } = props.task;
    this.state = {
      task: {
        id,
        title,
        description,
        priority,
        duedate,
        done
      }
    };
  }

  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      duedate: PropTypes.string.isRequired,
      done: PropTypes.bool
    })
  };

  handleChange(field, e) {
    let newtask = Object.assign(this.state.task);
    newtask[field] = e.target.value;
    this.setState(() => ({ task: newtask }));
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onEditTask(this.state.task);
  }

  handlePriority(priority) {
    let prior = this.state.task;
    prior.priority = priority;
    this.setState(() => ({ task: prior }));
  }

  render() {
    const task = this.state.task;
    return (
      <div class="container">
        <div class="error-text" name="errors">
          {this.state.errors}
        </div>
        <h3>Editing {this.props.task.title}</h3>
        <br />
        <div class="form-signin-heading">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div id="inputs">
              <input
                className="form-control"
                placeholder="Title"
                type="text"
                onChange={this.handleChange.bind(this, "title")}
                value={task.title}
              />
              <br />
              <textarea
                className="form-control"
                placeholder="Description"
                onChange={this.handleChange.bind(this, "description")}
                value={task.description}
              />
              <br />
              <input
                className="form-control"
                placeholder="Choose task priority"
                id="priority"
                type="number"
                onChange={this.handleChange.bind(this, "priority")}
                disabled={true}
                value={task.priority}
                required
              />
              <div className="text-left mb-3 mt-3" data-toggle="buttons">
                <span
                  className="btn btn-primary"
                  onClick={this.handlePriority.bind(this, "1")}
                >
                  High
                </span>
                &nbsp;
                <span
                  className="btn btn-warning"
                  onClick={this.handlePriority.bind(this, "2")}
                >
                  Medium
                </span>
                &nbsp;
                <span
                  className="btn btn-secondary"
                  onClick={this.handlePriority.bind(this, "3")}
                >
                  Low
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Duedate"
                type="date"
                id="date"
                onChange={this.handleChange.bind(this, "duedate")}
                minLength="6"
                value={task.duedate}
                required
              />
              <br />
              <input className="btn btn-info" type="submit" value="Update" />
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskEdit;
