import React from 'react'
import TodoList from '../../containers/TodoList'
import AddTodo from '../../containers/AddTodo'
import Footer from '../Footer'


const TodoApp = ({ match }) => {
  const filter = match.params.filter
  return (
    <div>
      <TodoList filter={filter} />
      <AddTodo />
      <Footer />
    </div>
  )
}


export default TodoApp
