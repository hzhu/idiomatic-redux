import React from 'react'
import TodoList from '../../containers/TodoList'
import AddTodo from '../../containers/AddTodo'
import Footer from '../Footer'


const TodoApp = () => (
  <div>
    <TodoList />
    <AddTodo />
    <Footer />
  </div>
)

export default TodoApp
