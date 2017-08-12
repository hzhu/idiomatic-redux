import createStore from '../../redux/createStore'
import combineReducers from '../../redux/combineReducers'
import { todos } from './Todos/reducers'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'


const configureStore = () => {
  const rootReducer = combineReducers({
    todos
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

  return store
}

export default configureStore
