import { schema } from 'normalizr'

// Establish the shape of the normalised/flattened state

const responseSchema = new schema.Entity('responses')

// TODO: Reference question ID correctly
const questionSchema = new schema.Entity('questions', {
  survey_responses: responseSchema
}, {
  idAttribute: (value, parent, key) => (console.log("value", value), value.question_id),
  processStrategy: (value) => ({ ...value, id: value.question_id })
})

const themeSchema = new schema.Entity('themes', {
  questions: questionSchema
}, {
})
const themeListSchema = new schema.Array(themeSchema)

const survey = new schema.Entity('surveys', {
  themes: themeListSchema
}, {
})

export default survey
