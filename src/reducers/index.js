import { combineReducers } from 'redux';
import {reducer as notificationsReducer} from 'reapop';
import TaskReducer from './tasks';

export default combineReducers({
  notifications: notificationsReducer(),
  task: TaskReducer
})
