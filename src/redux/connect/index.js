import React from 'react'
import { object } from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrappedComponent) => {
    return class extends React.Component {
      static contextTypes = {
        store: object
      }

      handleChange() {
        this.setState({}) // in place of `this.forceUpdate()`
      }

      componentDidMount() {
        const { store } = this.context

        // subscribe to the store so this component doesn't miss updates
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const { store } = this.context
        const state = store.getState()
        const ownProps = this.props

        // Pass state and props into mapStateToProps to generate object (keys) to be used as props for the wrapped component
        const mapStateToPropsObj = mapStateToProps(state, ownProps)

        let mapDispatchToPropsObj = {}

        // Wrap the actionCreators in a dispatch... And send them off as props to WrappedComponent
        if (typeof mapDispatchToProps === 'object') {
          for (let key in mapDispatchToProps) {
            mapDispatchToPropsObj[key] = (arg) => store.dispatch(mapDispatchToProps[key](arg))
          }

          return <WrappedComponent
            {...this.props}
            {...mapStateToPropsObj}
            {...mapDispatchToPropsObj} />
        }

        if (typeof mapDispatchToProps === 'function') {
          mapDispatchToPropsObj = mapDispatchToProps(store.dispatch, ownProps)

          return <WrappedComponent
            {...this.props}
            {...mapStateToPropsObj}
            {...mapDispatchToPropsObj} />
        }

        return <WrappedComponent {...this.props} {...mapStateToPropsObj} dispatch={store.dispatch} />
      }
    }
  }
}

export default connect