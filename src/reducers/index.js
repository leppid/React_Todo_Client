import { combineReducers } from "redux";
import { reducer as notificationsReducer } from "reapop";
import TaskReducer from "./tasks";

const defaultNotification = {
  position: "tc",
  dismissible: true,
  dismissAfter: 3000,
  allowHTML: true,
  closeButton: true
};

export default combineReducers({
  notifications: notificationsReducer(defaultNotification),
  task: TaskReducer
});
