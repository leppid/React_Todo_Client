import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/tasks";

class TaskAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {
        title: "",
        description: "",
        priority: "",
        duedate: "",
        userid: "",
        done: false
      }
    };
  }

  handleChange(field, e) {
    let newtask = Object.assign(this.state.task);
    newtask[field] = e.target.value;
    this.setState({ task: newtask });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onAddTask(this.state.task);
  }

  handlePriority(priority) {
    let field = document.getElementById("priority");
    field.value = priority;
    let prior = this.state.task;
    prior.priority = field.value;
    this.setState({ task: prior });
  }

  render() {
    return (
      <div class="container">
        <div class="error-text" name="errors">
          {this.state.errors}
        </div>
        <h3>Create Task</h3>
        <br />
        <div class="form-signin-heading">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input
                className="form-control"
                placeholder="Title"
                type="text"
                onChange={this.handleChange.bind(this, "title")}
              />
              <br />
              <textarea
                className="form-control"
                placeholder="Description"
                onChange={this.handleChange.bind(this, "description")}
              />
              <br />
              <input
                className="form-control"
                placeholder="Choose task priority"
                id="priority"
                type="number"
                onChange={this.handleChange.bind(this, "priority")}
                disabled={true}
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
                required
              />
              <br />
              <input className="btn btn-info" type="submit" value="Create" />
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  task: state.task.item
});

const mapDispatchToProps = dispatch => ({
  onAddTask: task => {
    dispatch(addTask(task));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskAdd);
