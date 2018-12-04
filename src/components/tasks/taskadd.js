import React  from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks';

class TaskAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        duedate: '',
        userid: '',
        done: false
      }
    }
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

  render(){
return (
<div class="container">
    <div class="error-text" name='errors'>{this.state.errors}</div>
    <h3>Create Task</h3>
    <br/>
    <div class="form-signin-heading">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>
              <input
                className='form-control'
                placeholder="Title"
                type="text"
                onChange={this.handleChange.bind(this, 'title')}
                minLength="8"

              />
              <br/>
              <input
                className='form-control'
                placeholder="Description"
                type="text"
                onChange={this.handleChange.bind(this, 'description')}

              />
              <br/>
              <input
                className='form-control'
                placeholder="Priority"
                type="text"
                onChange={this.handleChange.bind(this, 'priority')}
                required
              />
              <br/>
              <input
                className='form-control'
                placeholder="Duedate"
                type="date"
                onChange={this.handleChange.bind(this, 'duedate')}
                minLength="6"
                required
              />
              <br />
              <input
               className = 'btn btn-info'
               type='submit'
               value='Create'
              />
              <br />
</div>
    </form>
</div>
</div>
);
}}

export default connect(
  state => ({}),
  dispatch => ({
    onAddTask: (task) => {
      dispatch(addTask(task))
    }
  })
)(TaskAdd);
