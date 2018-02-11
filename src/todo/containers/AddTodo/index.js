import React from 'react'
import connect from '../../../redux/connect'
import { addTodo } from '../../store/Todos/actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
        dispatch(addTodo(input.value))

        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

export default connect()(AddTodo)
