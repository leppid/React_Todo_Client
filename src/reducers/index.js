import { combineReducers } from 'redux';
import {reducer as notificationsReducer} from 'reapop';
import users from './users';
import TaskReducer from './tasks';

export default combineReducers({
  notifications: notificationsReducer(),
  TaskReducer,
  users
})
