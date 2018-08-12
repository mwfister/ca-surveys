import { schema } from 'normalizr'
import { nameToKey } from './helpers'

// Establishes the shape of the normalised/flattened state
const responseSchema = new schema.Entity('responses')
const responseListSchema = new schema.Array(responseSchema)

const questionSchema = new schema.Entity('questions', {
  survey_responses: responseListSchema
}, {
  idAttribute: (value) => value.survey_responses[0].question_id,
  processStrategy: (value) => ({ ...value, id: value.survey_responses[0].question_id })
})
const questionListSchema = new schema.Array(questionSchema)

const themeSchema = new schema.Entity('themes', {
  questions: questionListSchema
}, {
  idAttribute: (value) => nameToKey(value)
})
const themeListSchema = new schema.Array(themeSchema)

const survey = new schema.Entity('surveys', {
  themes: themeListSchema
}, {
  idAttribute: (value) => nameToKey(value)
})

export default survey
