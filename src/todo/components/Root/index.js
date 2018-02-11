import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Provider from '../../../react-redux/Provider'
import TodoApp from '../TodoApp'

const history = createBrowserHistory()

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:filter" component={TodoApp} />
        <Route path="/" component={TodoApp} />
      </Switch>
    </Router>
  </Provider>
)

export default Root