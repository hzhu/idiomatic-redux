import React from 'react'
import connect from '../../../redux/connect'
import Todo from '../../components/Todo'
import { toggleTodo } from  '../../store/Todos/actions'


/**
 *  Helper method
 */
const getVisibleTodos = (todos, visibiityFilter) => {
  switch (visibiityFilter) {
    case 'all':
      return todos
    case 'active':
      return todos.filter(t => !t.completed)
    case 'completed':
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}


const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
  )
})


let TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(t => {
        return (
          <Todo
            key={t.id}
            {...t}
            toggleTodo={toggleTodo}
          />
        )
      })
    }
  </ul>
)


TodoList = connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)


export default TodoList
