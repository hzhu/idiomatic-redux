import React from 'react';


const Todo = ({ id, completed, text, toggleTodo }) => (
  <li style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={() => toggleTodo(id)}>
      {text}
  </li>
)

export default Todo
