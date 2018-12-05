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


  render () {
    return (
        <div className='row mb-2'>

        {this.props.tasks.map( (task) => {
          if (!task.done) {

            return (
              <div className="col-md-6">
                 <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                  <div className="card-body d-flex flex-column align-items-start">
                   <div key={task.id} className=''></div>
                   <div className="">{ task.title }</div>
                   <div className="">{ task.priority }</div>
                   <br/>
                   <button className="btn btn-outline-danger" onClick={this.handleDelete.bind(this, task.id)} title="Delete">Delete</button>
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

const mapStateToProps = (state) => ({
  tasks: state.task.items
})

export default connect(
  mapStateToProps,
  dispatch => ({
    onDoneTask: (id, done) => {
      dispatch(doneTask(id, done));
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    }
  })
)(TasksList);
