import { nameToKey } from '../utils/helpers'

export const FETCH_SURVEY_LIST_REQUEST = 'FETCH_SURVEY_LIST_REQUEST'
export const FETCH_SURVEY_LIST_SUCCESS = 'FETCH_SURVEY_LIST_SUCCESS'
export const FETCH_SURVEY_LIST_FAILURE = 'FETCH_SURVEY_LIST_FAILURE'

export function fetchSurveyListRequest() {
  return {
    type: FETCH_SURVEY_LIST_REQUEST,
  }
}

export function fetchSurveyListSuccess({ survey_results }) {
  return {
    type: FETCH_SURVEY_LIST_SUCCESS,
    surveys: survey_results.reduce((surveys, survey) => {
      return {
        ...surveys,
        [nameToKey(survey)]: {
          ...survey
        }
      }
    }, {}),
  }
}

export function fetchSurveyListFailure(error) {
  return {
    type: FETCH_SURVEY_LIST_FAILURE,
    error,
  }
}

export const FETCH_SURVEYS_REQUEST = 'FETCH_SURVEYS_REQUEST'
export const FETCH_SURVEYS_SUCCESS = 'FETCH_SURVEYS_SUCCESS'
export const FETCH_SURVEYS_FAILURE = 'FETCH_SURVEYS_FAILURE'

export function fetchSurveysRequest() {
  return {
    type: FETCH_SURVEYS_REQUEST,
  }
}

export function fetchSurveysSuccess({ surveys, themes, questions, responses }) {
  const createRespondents = () => {
    Object.keys(responses).reduce((respondents, key) => {
      const { respondent_id, question_id } = responses[key]
      const responseList = respondents[respondent_id].responses
      console.log("responses[key]", responses[key])

      return {
        ...respondents,
        [respondent_id]: {
          responses: responseList
            ? responseList.concat(question_id)
            : [question_id]
        }
      }
    }, {})
  }

  return {
    type: FETCH_SURVEYS_SUCCESS,
    surveys,
    themes,
    questions,
    responses,
    respondents: createRespondents(),
  }
}

export function fetchSurveysFailure(error) {
  return {
    type: FETCH_SURVEYS_FAILURE,
    error,
  }
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(fetchSurveyListRequest())
    fetch('/api/surveys')
      .then((response) => response.json())
      .then((surveys) => dispatch(fetchSurveyListSuccess(surveys)))
      .catch((error) => {
        dispatch(fetchSurveyListFailure(error))
        return console.error("Gotta catch 'em all", error)
      })
  }
}
