import React from 'react'
import { object } from 'prop-types'


class Provider extends React.Component {
  static childContextTypes = {
    store: object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children
  }
}

export default Provider
