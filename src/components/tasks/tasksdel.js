import React from "react";
import { Link } from "react-router-dom";
class TasksDel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }

  handleCheck(task) {
    let tasks = this.state.checked;
    let index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    } else {
      tasks.push(task);
    }
    this.setState(() => ({ checked: tasks }));
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
    this.setState(() => ({ checked: [] }));
  }

  isChecked = id => {
    if (this.state.checked.indexOf(id) === -1) return false;
    return true;
  };

  render() {
    let tasks = this.props.tasks ? this.props.tasks : [];
    return (
      <div className="container">
        <button
          className="btn btn-outline-dark mr-2"
          onClick={this.handleMarkAll.bind(this)}
          id="mark"
        >
          Mark all
        </button>
        <button
          className="btn btn-outline-dark mr-2"
          onClick={this.handleUnMarkAll.bind(this)}
          id="unmark"
        >
          Unmark all
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={this.handleDeleteChecked.bind(this)}
          id="deltasks"
        >
          Delete Tasks
        </button>

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
                <div key={task.id} className="col-md-6">
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
                      <label className="containerr">
                        <input
                          type="checkbox"
                          name="makerType"
                          checked={this.isChecked(task.id)}
                          onChange={this.handleCheck.bind(this, task.id)}
                          id="checkbox"
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
          {tasks.map(task => {
            if (task.done) {
              return (
                <div key={task.id} className="col-md-6">
                  <div className="card flex-md-row mb-4 shadow-sm h-md-250 bgprofile">
                    <div className="card-body d-flex flex-column align-items-start">
                      <h3>
                        <div className="" id="title">
                          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                        </div>
                      </h3>
                      <div className="btn btn-success">Completed</div>
                      <br />
                      <label className="containerr">
                        <input
                          type="checkbox"
                          name="makerType"
                          checked={this.isChecked(task.id)}
                          onChange={this.handleCheck.bind(this, task.id)}
                          id="checkbox"
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

export default TasksDel;
