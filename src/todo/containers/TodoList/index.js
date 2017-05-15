import React from 'react'
import { connect } from 'react-redux'
import Todo from '../../components/Todo'
import { toggleTodo } from  '../../store/Todos/actions'


/**
 *  Helper method
 */
const getVisibleTodos = (todos, visibiityFilter) => {
  switch (visibiityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}


const mapStateToProps = state => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter
  )
})


const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
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


TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)


export default TodoList
