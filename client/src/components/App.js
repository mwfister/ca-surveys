import React, { Component } from 'react';
import { connect } from 'react-redux'
import { normalize } from 'normalizr'

import surveysSchema from '../utils/schema'
import { log } from '../utils/helpers'
import { handleInitialData, loadPageData } from '../actions/surveys'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadPageData('/survey_results/1.json'))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <p>{JSON.stringify(this.props.themes)}</p>
          <p>{JSON.stringify(this.props.questions)}</p>
          <h2>{JSON.stringify(this.props.surveys)}</h2>
          <p>{JSON.stringify(this.props.respondents)}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { surveys, themes, questions, respondents } = state

  return {
    surveys,
    themes,
    questions,
    respondents,
  }
}

export default connect(mapStateToProps)(App)
