import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './todo'
import store from './todo/store'
import Provider from './redux/Provider'


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  )
}


/**
 * Subscribe render method to trigger when store is updated
 * Why is subscribe not normally needed?
 * Is the functionality bundled with a redux / react-redux API?
 */
store.subscribe(render)


/**
 * Used trigger initial render
 */
store.dispatch({type: ''})
