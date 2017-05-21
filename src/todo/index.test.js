import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './index'
import Provider from '../redux/Provider'
import store from './store'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
  , div)
})
