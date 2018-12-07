import React from "react"
import { connect } from "react-redux"
import { getTask, deleteTask, doneTask } from "../../actions/tasks"
import hist from '../../services/hist'
import { Link } from "react-router-dom";


class TaskProfile extends React.Component {

  componentDidMount () {
    let id = this.props.match.params.id
    this.props.onGetTask(id)
  }

  handleDelete (id) {
    this.props.onDeleteTask(id)
    hist.push('/')
  }

  handleDone (id, done) {
    this.props.onDoneTask(id, done);
    hist.push("/tasks")
  }


  render() {

    const {task} = this.props

    return (
      <div align='center'>
      <div className="col-md-6">
       <div className="card flex-md-row mb-4 shadow-sm">
        <div className="card-body text-center">
         <h2><div className="">{ task.title }</div></h2>
         <hr/>
         <h4><div className="">{ task.description }</div></h4>
         <br/>
         <div className={(task.priority === 1) ? 'btn btn-primary' : (task.priority === 2) ? 'btn btn-warning' : (task.priority === 3) ? 'btn btn-secondary': ''}>{(task.priority === 1) ? 'High' : (task.priority === 2) ? 'Medium' : (task.priority === 3) ? 'Low': ''}</div>
         <div className="btn btn-outline-primary ml-2">Need to do to { task.duedate }</div>
         <br/><br/>
         <h3><span className={(!task.done) ? 'btn btn-dark' : (task.done) ? 'btn btn-success' : ''}>{(!task.done) ? 'Task Active' : (task.done) ? 'Task Done' : ''}</span></h3>
         <hr/>
         <span className={(!task.done) ? "btn btn-outline-success mr-2" : (task.done) ? "btn btn-outline-dark mr-2" : ''} onClick={this.handleDone.bind(this, task.id, task.done)}>{(!task.done) ? 'Done' : (task.done) ? "Activate" : ''}</span>
         <Link to={`/tasks/${task.id}/edit`}><span className="btn btn-outline-warning mr-2">Edit</span></Link>
         <span className="btn btn-outline-danger" onClick={this.handleDelete.bind(this, task.id)}>Delete</span>
        </div>
       </div>
       </div>
      </div>
    )
  }



}

const mapStateToProps = (state) => ({
  task: state.task.item
})

export default connect(
  mapStateToProps,
  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    },
    onDoneTask: (id, done) => {
      dispatch(doneTask(id, done));
    }
  })
)(TaskProfile)