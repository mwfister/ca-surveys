import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_FAILURE,
  FETCH_SURVEY_LIST_SUCCESS,
  FETCH_SURVEY_SUCCESS,
} from '../actions/surveys'
import { mergeSurveys } from '../utils/helpers'

const initialState = {
  surveys: [],
  themes: {},
  questions: {},
  responses: {},
  respondents: {},
  loading: false,
  error: null,
}

export default function surveys(state = initialState, action) {
  switch (action.type) {
    case FETCH_SURVEYS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_SURVEYS_FAILURE: {
      const { error } = action

      return {
        ...state,
        loading: false,
        error,
      }
    }
    case FETCH_SURVEY_LIST_SUCCESS: {
      const { surveys } = action

      return {
        ...state,
        surveys,
        loading: false,
      }
    }
    case FETCH_SURVEY_SUCCESS: {
      const {
        survey,
        themes,
        questions,
        responses,
        respondents,
      } = action

      return {
        ...state,
        surveys: mergeSurveys(state.surveys, survey),
        themes: {
          ...state.themes,
          ...themes,
        },
        questions: {
          ...state.questions,
          ...questions,
        },
        responses: {
          ...state.responses,
          ...responses,
        },
        respondents: {
          ...state.respondents,
          ...respondents,
        },
        loading: false,
      }
    }
    default:
      return state
  }
}
