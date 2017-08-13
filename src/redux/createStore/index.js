const createStore = (reducer, initialState) => {
  let state = initialState

  const listeners = []

  const getState = () => state

  const dispatch = action => {
    state = reducer(state, action)

    // Notify every change listener by calling it.
    listeners.forEach(listener => listener())
  }

  // Registers a callback that the Redux store will call anytime an action is dispatched,
  // so you can update the UI of the app to reflect the current app state.
  const subscribe = (listener) => {
    listeners.push(listener)

    return () => listeners.filter(l => l !== listener)
  }

  // to setup initalState
  dispatch({})

  return {
    dispatch,
    getState,
    subscribe
  }
}

export default createStore
