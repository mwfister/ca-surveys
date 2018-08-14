import {
  FETCH_SURVEY_LIST_REQUEST,
  FETCH_SURVEY_LIST_SUCCESS,
  FETCH_SURVEY_LIST_FAILURE,
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_SUCESS,
  FETCH_SURVEYS_FAILURE,
} from '../actions/surveys'

const initialState = {
  surveys: {},
  themes: {},
  questions: {},
  responses: {},
  respondents: {},
  loading: false,
  error: null,
}

export default function surveys(state = initialState, action) {
  switch (action.type) {
    case FETCH_SURVEY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_SURVEY_LIST_SUCCESS: {
      const { surveys } = action

      return {
        ...state,
        surveys,
        loading: false,
      }
    }
    case FETCH_SURVEY_LIST_FAILURE: {
      const { error } = action

      return {
        ...state,
        loading: false,
        error,
      }
    }
    case FETCH_SURVEYS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SURVEYS_SUCCESS: {
      const {
        surveys,
        themes,
        questions,
        responses,
        respondents,
      } = action

      return {
        ...state,
        surveys,
        themes,
        questions,
        responses,
        respondents,
        loading: false,
      }
    }
    case FETCH_SURVEYS_FAILURE: {
      const { error } = action

      return {
        ...state,
        loading: false,
        error,
      }
    }
    default:
      return state
  }
}
