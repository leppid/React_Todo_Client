import {
  GET_TASKS,
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  SORT_TASKS_BY_PRIORITY,
  SORT_TASKS_BY_TITLE
} from "../actions/actionTypes";

export default function TaskReducer(
  state = {
    items: [],
    item: {}
  },
  action
) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        items: action.payload
      };

    case GET_TASK:
      return {
        ...state,
        item: action.payload
      };

    case ADD_TASK:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case DELETE_TASK:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      };

    case DONE_TASK:
      state.items = state.items.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case SORT_TASKS_BY_TITLE:
      const sortedByTitile = state.items.sort((a, b) => {
        return a.title > b.title;
      });
      return {
        ...state,
        items: sortedByTitile
      };

    case SORT_TASKS_BY_PRIORITY:
      const sortedByPriority = state.items.sort((a, b) => {
        return a.priority > b.priority;
      });
      return {
        ...state,
        items: sortedByPriority
      };

    default:
      return state;
  }
}
