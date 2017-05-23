export const logEvent = (event, properties) => {
  window.amplitude.getInstance().logEvent(event, properties)
}
