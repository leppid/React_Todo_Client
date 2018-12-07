import React from 'react';
import TasksList from './tasksList';

class Tasks extends React.Component {
    render(){
  return (
    <div className="container">
        <label className="mr-2">Sort by:</label>
        <a className="btn btn-light active mr-1">Title</a>
        <a className="btn btn-light active mr-1">Priority</a>
        <hr/>
        <TasksList />
      </div>
  );
}}

export default Tasks;
