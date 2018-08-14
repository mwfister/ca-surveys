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

export function createRespondents(responses) {
  return Object.keys(responses).reduce((respondents, key) => {
    const { respondent_id, question_id } = responses[key]
    const hasResponded = responses[key].response_content !== ""
    const respondent = respondents.hasOwnProperty(respondent_id)
      ? respondents[respondent_id]
      : {}
    const responseList = respondent.hasOwnProperty('responses')
      ? respondents[respondent_id].responses
      : []

    return {
      ...respondents,
      [respondent_id]: {
        responses: hasResponded
          ? responseList.concat(question_id)
          : responseList
        }
    }
  }, {})
}
