import React from 'react'
import { object } from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => {
  const originalMapStateToProps = mapStateToProps
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

        // These are the props passed to the connected component.
        const ownProps = this.props

        // Generate object (keys) to be used as props for the wrapped component
        // Both of the following objects contain keys that will be merged into the wrapped component's props
        let mapStateToPropsObj = {}
        let mapDispatchToPropsObj = {}

        if (typeof mapStateToProps === 'function') {
          mapStateToProps = mapStateToProps(state, ownProps)
          mapStateToPropsObj = {
            ...mapStateToPropsObj,
            ...mapStateToProps
          }
        }

        if (typeof mapStateToProps === 'object') {
          mapStateToPropsObj = {
            ...mapStateToPropsObj,
            ...mapStateToProps
          }
        }

        if (typeof originalMapStateToProps === 'function') {
          const nextProps = originalMapStateToProps(state, ownProps)
          mapStateToPropsObj = {
            ...mapStateToPropsObj,
            ...nextProps
          }
        }

        // Wrap the actionCreators in a dispatch and send them off as props to wrapped component.
        if (typeof mapDispatchToProps === 'object') {
          for (let key in mapDispatchToProps) {
            mapDispatchToPropsObj[key] = arg => {
              let action = mapDispatchToProps[key](arg)
              return store.dispatch(action)
            }
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

        if (arguments.length === 0) {
          return (
            <WrappedComponent {...this.props} dispatch={store.dispatch} />
          )
        }

        return <WrappedComponent {...this.props} {...mapStateToPropsObj} dispatch={store.dispatch} />
      }
    }
  }
}

export default connect