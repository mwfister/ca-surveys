import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_FAILURE,
  FETCH_SURVEY_LIST_SUCCESS,
  FETCH_SURVEY_SUCCESS,
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
    case FETCH_SURVEY_SUCCESS: {
      const {
        survey,
        themes,
        questions,
        responses,
        respondents,
      } = action

      const mergeSurveys = () => {
        let applied = false
        let mergedSurveys = state.surveys.reduce((array, currentSurvey) => {
          if (currentSurvey.name == survey.name) {
            const merge = Object.assign({}, currentSurvey, survey)
            applied = true
            return array.concat(merge)
          }
          return array.concat(currentSurvey)
        }, [])

        return applied ? mergedSurveys : mergedSurveys.concat(survey)
      }

      return {
        ...state,
        surveys: mergeSurveys(),
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
