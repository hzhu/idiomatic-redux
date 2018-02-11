⚠️ This is a self implementation and not how the offical `connect` actually works.

# connect
Connects a React component to a Redux store.

It does not modify the component class passed to it; instead it *returns* a new, connected component class for you to use.

##  Arguments

### `mapStateToProps`
If this argument is specified, the new component will subscribe to Redux store updates.

This means that anytime the store is updated, `mapStateToProps` will be called. The results of `mapStateToProps` must be a plain object, which will be merged into the component's props. If you don't want to subscribe to store updates, pass `null` or `undefined` in place of `mapStateToProps`.

### `mapDispatchToProps`
If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.

If a function is passed, it will be given dispatch as the first parameter. It’s up to you to return an object that somehow uses dispatch to bind action creators in your own way.