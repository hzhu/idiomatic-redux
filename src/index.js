import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './todo/store'
import Root from './todo/components/Root'


const store = configureStore()

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
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
* Used trigger initial render.
*/
store.dispatch({type: ''})
