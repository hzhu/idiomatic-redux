import React from 'react'
import connect from '../../../redux/connect'
import Todo from '../../components/Todo'
import { toggleTodo } from  '../../store/Todos/actions'
import { getVisibleTodos } from '../../store/Todos/selectors'

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

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state,
    ownProps.filter
  )
})

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)
