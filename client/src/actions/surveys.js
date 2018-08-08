const RECEIVE_SURVEYS = 'RECEIVE_SURVEYS'

export function receiveSurveys({ surveys, themes, questions, respondents }) {
  return {
    type: RECEIVE_SURVEYS,
    surveys,
    themes,
    questions,
    respondents,
  }
}
