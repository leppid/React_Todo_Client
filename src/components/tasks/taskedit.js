import React from "react";
import { connect } from "react-redux";
import { editTask, getTask } from "../../actions/tasks";
import PropTypes from "prop-types";

class TaskEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {}
    };
  }

  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.context.store.dispatch(getTask(id));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ task: nextProps.task });
  }

  handleChange(field, e) {
    let newtask = Object.assign(this.state.task);
    newtask[field] = e.target.value;
    this.setState({ task: newtask });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onEditTask(this.state.task);
  }

  handlePriority(priority) {
    let field = document.getElementById("priority");
    field.value = priority;
    let prior = this.state.task;
    prior.priority = field.value;
    this.setState({ task: prior });
  }

  render() {
    const task = this.state.task;
    return (
      <div class="container">
        <div class="error-text" name="errors">
          {this.state.errors}
        </div>
        <h3>Editing {task.title}</h3>
        <br />
        <div class="form-signin-heading">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input
                className="form-control"
                placeholder="Title"
                type="text"
                onChange={this.handleChange.bind(this, "title")}
                value={task.title}
              />
              <br />
              <input
                className="form-control"
                placeholder="Description"
                type="text"
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
)(TaskEdit);
