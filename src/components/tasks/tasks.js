import React from 'react';
import TasksList from './tasksList';

class Tasks extends React.Component {
    render(){
  return (
    <div className="container">
        <h3>Tasks</h3>
        <hr/>
        <TasksList />
      </div>
  );
}}

export default Tasks;
