import createStore from '../../redux/createStore'
import combineReducers from '../../redux/combineReducers'
import { todos, visibilityFilter } from './Todos/reducers'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'


const rootReducer = combineReducers({
  todos,
  visibilityFilter
})


const persistedState = loadState()


const store = createStore(
  rootReducer,
  persistedState
)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

window.store = store
export default store
