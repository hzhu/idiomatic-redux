import { v4 } from 'uuid'

/**
 * Action Creators
 */


export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text
})


export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
