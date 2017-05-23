import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/Todos/actions'
import { logEvent } from '../../../amplitude'


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
        dispatch(addTodo(input.value))

        logEvent('Added Todo', {
          todo: input.value
        })

        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
