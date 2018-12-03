import axios from 'axios'
import React from 'react'
import {tasksurl, headers} from '../components/apiconfig'
import hist from '../services/hist'
import { GET_TASKS, GET_TASK, ADD_TASK, DELETE_TASK, DONE_TASK } from './actionTypes';
import {notify} from 'reapop'

export function getTasks() {
    return function (dispatch, getState) {
      axios.get(`${tasksurl}`, { headers: headers })
  
        .then(res => {
          if (res.status === 200) {
            dispatch({ type: GET_TASKS, payload: res.data });
          };
        })
        .catch(e => {
          console.error("error: ", e);
        })
  
    }
  }

  export function getTask(id) {
    return function (dispatch, getState) {
      axios.get(`${tasksurl}/${id}`, { headers: headers })
  
        .then(res => {
          if (res.status === 200) {
            dispatch({ type: GET_TASK, payload: res.data });
          }
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }

  export function doneTask(id, done) {
    return function (dispatch, getState) {
        if (done === false){
            done = true
        }else{
            done = false
        } 
        let task = {id: id, done: done}
        let body = {task: task}
      axios.get(`${tasksurl}/${task.id}`, body , { headers: headers })
  
        .then(res => {
          if (res.status === 200) {
            dispatch({ type: DONE_TASK, payload: res.data });
          }
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }

  export function addTask(task) {
    return function (dispatch, getState) {
      axios.post(`${tasksurl}`, task , { headers: headers })
  
        .then(res => {
          if (res.status === 200) {
            dispatch({ type: ADD_TASK, payload: res.data });
            dispatch(notify({message: 'Task has been created', status: 'success' }))
          } 
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }

export function deleteTask(id) {
    return function (dispatch, getState) {
      axios.delete(`${tasksurl}/${id}`, { headers: headers })
  
        .then(res => {
          if (res.status === 200) {
            dispatch({ type: DELETE_TASK, payload: res.data });
            dispatch(notify({message: 'Task has been deleted', status: 'success' }))
            setTimeout(() => {
               hist.push('/tasks')
            })
          }
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }