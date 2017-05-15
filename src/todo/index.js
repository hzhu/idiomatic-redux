import React from 'react'
import TodoList from './containers/TodoList'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'


const TodoApp = () => (
  <div>
    <TodoList />
    <AddTodo />
    <Footer />
  </div>
)


export default TodoApp
