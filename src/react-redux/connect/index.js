import React from 'react'
import { object } from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrappedComponent) => {
    return class extends React.Component {
      static contextTypes = {
        store: object
      }

      handleChange() {
        this.setState({}) // Used in place of `this.forceUpdate()`.
      }

      componentDidMount() {
        const { store } = this.context

        // Subscribe to the store so this component doesn't miss updates.
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const { store } = this.context
        const state = store.getState()

        // These are the props passed to the connected component.
        const ownProps = this.props

        // Object's keys to be used as props for the wrapped component.
        let mapStateToPropsObj = {}
        let mapDispatchToPropsObj = {}

        if (typeof mapStateToProps === 'function') {
          mapStateToPropsObj = {
            ...mapStateToProps(state, ownProps)
          }
        }

        if (typeof mapStateToProps === 'object') {
          mapStateToPropsObj = {
            ...mapStateToProps
          }
        }

        if (typeof mapDispatchToProps === 'function') {
          mapDispatchToPropsObj = mapDispatchToProps(store.dispatch, ownProps)
        }

        // Wrap the actionCreators in a dispatch and send them off as props to wrapped component.
        if (typeof mapDispatchToProps === 'object') {
          for (let key in mapDispatchToProps) {
            mapDispatchToPropsObj[key] = arg => {
              let action = mapDispatchToProps[key](arg)
              return store.dispatch(action)
            }
          }
        }

        // If mapStateToProps & mapDispatchToProps are not passed to `connect`
        // just provide dispatch to the wrapped component.
        if (mapStateToProps === undefined && mapDispatchToProps === undefined) {
          return (
            <WrappedComponent
              {...ownProps}
              dispatch={store.dispatch}
            />
          )
        }

        return (
          <WrappedComponent
            {...ownProps}
            {...mapStateToPropsObj}
            {...mapDispatchToPropsObj}
          />
        )
      }
    }
  }
}

export default connect