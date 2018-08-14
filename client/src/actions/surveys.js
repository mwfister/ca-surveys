import { normalize } from 'normalizr'

import surveysSchema from '../utils/schema'
import { nameToKey, createRespondents } from '../utils/helpers'

export const FETCH_SURVEYS_REQUEST = 'FETCH_SURVEY_LIST_REQUEST'
export const FETCH_SURVEYS_FAILURE = 'FETCH_SURVEY_LIST_FAILURE'
export const FETCH_SURVEY_LIST_SUCCESS = 'FETCH_SURVEY_LIST_SUCCESS'

export function fetchSurveysRequest() {
  return {
    type: FETCH_SURVEYS_REQUEST,
  }
}

export function fetchSurveysFailure(error) {
  return {
    type: FETCH_SURVEYS_FAILURE,
    error,
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

export const FETCH_SURVEYS_SUCCESS = 'FETCH_SURVEYS_SUCCESS'

export function fetchSurveysSuccess({ surveys, themes, questions, responses }) {
  try {
    const respondents = createRespondents(responses)
    return {
      type: FETCH_SURVEYS_SUCCESS,
      surveys,
      themes,
      questions,
      responses,
      respondents,
    }
  } catch (error) {
    throw new Error(error)
  }
}

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
