import React from 'react'
import { object } from 'prop-types'


class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: object
}

export default Provider
