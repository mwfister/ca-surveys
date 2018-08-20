import React, { Component } from 'react';
import { connect } from 'react-redux'

import surveysSchema from '../utils/schema'
import { handleInitialData, fetchSurveyData } from '../actions/surveys'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    //this.props.dispatch(fetchSurveyData('/survey_results/1.json'))
    //this.props.dispatch(fetchSurveyData('/survey_results/2.json'))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Dashboard />
        </header>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //const { surveys, themes, questions, respondents } = state

  return {
    surveys: state.surveys
    //themes,
    //questions,
    //respondents,
  }
}

export default connect(mapStateToProps)(App)
