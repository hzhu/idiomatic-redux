import React from 'react'
import TodoList from '../../containers/TodoList'
import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'


const TodoApp = () => (
  <div>
    <TodoList />
    <AddTodo />
    <Footer />
    <br />
    <p>This app is running in <b>{process.env.NODE_ENV}</b> environment.</p>
    <i>process.env.NODE_ENV === {process.env.NODE_ENV}</i>
  </div>
)

export default TodoApp
