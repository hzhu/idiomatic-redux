import combineReducers from '../../../../redux/combineReducers'
import todo from './todo'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
})

export default todos

// "Private selector"
const getAllTodos = state =>
  state.allIds.map(id => state.byId[id])

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'all':
      return allTodos
    case 'active':
      return allTodos.filter(todo => !todo.completed)
    case 'completed':
      return allTodos.filter(todo => todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}.`)
  }
}