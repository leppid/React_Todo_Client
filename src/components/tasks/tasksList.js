import React from "react";
import { connect } from "react-redux";
import { doneTask, deleteTask, getTask, getTasks } from "../../actions/tasks";
import PropTypes from 'prop-types';
class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [],
        checked: []
    };
  }

  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount () {
    this.context.store.dispatch(getTasks());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tasks: nextProps.tasks });

  }

  handleDone (id, active) {
    this.props.onDoneTask(id, active);
  }

  handleDelete (id) {
    this.props.onDeleteTask(id);
  }


  render() {
    console.log(this.state.tasks)
    return (
      <div class="container">
        <h5>Tasks here</h5>
      </div>
    )
        {this.props.tasks.map( (task) => {
            return (
              <div key={task.id} className='container-fluid'>
              <div className="col-xs-7">{ task.title }</div>
              </div>
            );

          }
        )}

  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onDoneTask: (id, done) => {
      dispatch(doneTask(id, done));
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    }
  })
)(TasksList);
