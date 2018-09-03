import React, { Component } from 'react';
import { connect } from 'react-redux'

import surveysSchema from '../utils/schema'
import { handleInitialData, fetchSurveyData } from '../actions/surveys'
import Dashboard from './Dashboard'
import Survey from './Survey'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData())
  }
  componentDidMount() {
    this.props.dispatch(fetchSurveyData('/survey_results/1.json'))
    this.props.dispatch(fetchSurveyData('/survey_results/2.json'))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.props.loading ? <Survey surveyIndex={0}/> :
          <p>Loading</p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //const { surveys, themes, questions, respondents } = state

  return {
    surveys: state.surveys,
    loading: state.surveys[0],
    //themes,
    //questions,
    //respondents,
  }
}

export default connect(mapStateToProps)(App)
