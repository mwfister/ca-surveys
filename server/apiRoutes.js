const express = require('express');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, 'data')

router.get('/surveys', (req, res) => {
  const surveyList = require(path.join(dataPath, 'index.json'))

  res.status(200).json(surveyList)
})

router.get('/survey_results/:survey', (req, res) => {
  const survey = require(path.join(dataPath, `${req.params.survey}`))

  res.status(200).json(survey)
})

module.exports = router;
