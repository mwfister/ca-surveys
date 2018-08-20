import { normalize } from 'normalizr'

import surveySchema from '../utils/schema'
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
    surveys: survey_results,
  }
}

export const FETCH_SURVEY_SUCCESS = 'FETCH_SURVEY_SUCCESS'

export function fetchSurveySuccess({ entities, result }) {
  try {
    const { themes, questions, responses } = entities
    const respondents = createRespondents(responses)

    return {
      type: FETCH_SURVEY_SUCCESS,
      survey: result[0],
      themes,
      questions,
      responses,
      respondents,
    }
  } catch (error) {
    return console.error("FETCH_SURVEY_SUCCESS Error\n", error)
  }
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(fetchSurveysRequest())
    fetch('/api/surveys')
      .then((response) => response.json())
      .then((surveys) => dispatch(fetchSurveyListSuccess(surveys)))
      .catch((error) => {
        dispatch(fetchSurveysFailure(error))
        return console.error("Gotta catch 'em all", error)
      })
  }
}

export function loadPageData(route) {
  return (dispatch) => {
    dispatch(fetchSurveysRequest())
    fetch(`/api/${route}`)
      .then((response) => response.json())
      .then((survey) => (
        normalize(survey, surveySchema)
      ))
      .then((normSurvey) => dispatch(fetchSurveySuccess(normSurvey)))
      .catch((error) => {
        dispatch(fetchSurveysFailure(error))
        return console.error("Gotta catch 'em all", error)
      })
  }
}
