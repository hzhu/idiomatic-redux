import createStore from '../../redux/createStore'
import combineReducers from '../../redux/combineReducers'
import { todos, visibilityFilter } from './Todos/reducers'


const rootReducer = combineReducers({
  todos,
  visibilityFilter
})


const persistedState = {
  todos: [{
    id: 0,
    text: 'learn functional programming',
    completed: false
  }, {
    id: 1,
    text: 'workout',
    completed: false
  }]
}


const store = createStore(
  rootReducer,
  persistedState
)


window.store = store
export default store
