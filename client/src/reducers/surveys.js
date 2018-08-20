import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_FAILURE,
  FETCH_SURVEY_LIST_SUCCESS,
  FETCH_SURVEYS_SUCCESS,
} from '../actions/surveys'

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
    case FETCH_SURVEYS_SUCCESS: {
      const {
        survey,
        themes,
        questions,
        responses,
        respondents,
      } = action

      const mergedResults = state.result.reduce((acc, survey, index) => {
        if (survey.name === result[0].name) {
          return acc.concat(...survey, result)
        }
        return acc.concat(survey)
      }, [])

      return {
        ...state,
        result: mergedResults,
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
