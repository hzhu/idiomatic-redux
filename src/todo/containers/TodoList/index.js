import React from 'react'
import { withRouter } from 'react-router'
import connect from '../../../react-redux/connect'
import Todo from '../../components/Todo'
import { toggleTodo } from  '../../store/Todos/actions'
import { getVisibleTodos } from '../../store/Todos/selectors'

let TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggleTodo={toggleTodo}
      />
    ))}
  </ul>
)

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state,
    ownProps.match.params.filter || 'all'
  )
})

TodoList = connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)

export default withRouter(TodoList)