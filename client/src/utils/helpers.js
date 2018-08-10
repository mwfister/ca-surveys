export function nameToKey(object) {
  try {
    return object.name
      .toLowerCase()
      .split(' ')
      .join('_')
  } catch (e) {
    console.group('nameToKey Error')
    console.log("Object doesn't have property: name")
    console.log(e)
    console.groupEnd()
  }
}

// Used for debugging/tracing values in Promise chains.
export const log = (message) => (value) => {
  console.log(message, value)
  return value
}
