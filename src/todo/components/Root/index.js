import React from 'react'
import Provider from '../../../redux/Provider'
import TodoApp from '../../components/TodoApp'


const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)

export default Root