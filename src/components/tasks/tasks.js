import React from 'react';
import TasksList from './tasksList';

class Tasks extends React.Component {
    render(){
  return (
    <div className="container">
     <TasksList />  
    </div>
  );
}}

export default Tasks;