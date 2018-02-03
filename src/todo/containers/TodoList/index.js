import React from 'react'
import connect from '../../../redux/connect'
import Todo from '../../components/Todo'
import { toggleTodo } from  '../../store/Todos/actions'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
          />
        )
      })
    }
  </ul>
)

// selector
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

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)
