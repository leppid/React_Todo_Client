import { GET_TASKS, GET_TASK, ADD_TASK, DELETE_TASK, DONE_TASK } from '../actions/actionTypes';

let initState = {
    items: {},
    item: []
  }

  export default function TaskReducer(state = initState, action) {
    switch (action.type) {
        case GET_TASKS:
          return {
            ...state,
            items: action.payload
          }

        case GET_TASK:
          return {
            ...state,
            item: action.payload
          }

        case ADD_TASK:
          return {
            ...state,
            items: [ action.payload, ...state.items]
          }

        case DELETE_TASK:
          return {
            ...state,
            items: state.items.filter(el => el.id !== action.payload)
          }

        case DONE_TASK:
        state.items = state.items.filter(el => el.id !== action.payload.id)
          return {
            ...state,
            items: [ action.payload, ...state.items]
          }

        default:
          return state;
  }
}
