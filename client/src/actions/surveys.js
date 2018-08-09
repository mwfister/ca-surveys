const FETCH_SURVEYS_REQUEST = 'FETCH_SURVEYS_REQUEST'
const FETCH_SURVEYS_SUCCESS = 'FETCH_SURVEYS_SUCCESS'
const FETCH_SURVEYS_FAILURE = 'FETCH_SURVEYS_ERROR'

export function fetchSurveysRequest() {
  return {
    type: FETCH_SURVEYS_REQUEST,
  }
}

export function fetchSurveysSuccess({ surveys, themes, questions, respondents }) {
  return {
    type: FETCH_SURVEYS_SUCCESS,
    surveys,
    themes,
    questions,
    respondents,
  }
}

export function fetchSurveysFailure(error) {
  return {
    type: FETCH_SURVEYS_FAILURE,
    error,
  }
}

export function handleInitialData() {

}
