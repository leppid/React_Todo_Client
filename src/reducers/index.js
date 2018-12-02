import {reducer as notificationsReducer} from 'reapop';
import users from './users';
import { combineReducers } from 'redux';

export default combineReducers({
  notifications: notificationsReducer(),
  users
})
