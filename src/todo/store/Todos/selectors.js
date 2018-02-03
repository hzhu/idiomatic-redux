export const getVisibleTodos = (state, visibiityFilter) => {
  switch (visibiityFilter) {
    case 'all':
      return state.todos
    case 'active':
      return state.todos.filter(todo => !todo.completed)
    case 'completed':
      return state.todos.filter(todo => todo.completed)
    default:
      return state.todos
  }
}