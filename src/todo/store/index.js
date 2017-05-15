import createStore from '../../redux/createStore'
import combineReducers from '../../redux/combineReducers'
import { todos, visibilityFilter } from './Todos/reducers'


const rootReducer = combineReducers({
  todos,
  visibilityFilter
})


const store = createStore(rootReducer)


window.store = store
export default store
