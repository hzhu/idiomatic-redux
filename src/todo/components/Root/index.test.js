import React from 'react'
import ReactDOM from 'react-dom'
import Root from './index'
import configureStore from '../../store'


it('renders without crashing', () => {
  const store = configureStore()
  const div = document.createElement('div')

  ReactDOM.render(
    <Root store={store} />,
    div
  )
})
