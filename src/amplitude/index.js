/**
 * Todo find this key a home. Seems out of place.
 */
window.REACT_APP_AMPLITUDE_KEY = process.env.REACT_APP_AMPLITUDE_KEY

export const logEvent = (event, properties) => {
  window.amplitude.getInstance().logEvent(event, properties)
}


