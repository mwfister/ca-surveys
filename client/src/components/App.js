import React, { Component } from 'react';

import { normalize } from 'normalizr'
import surveysSchema from '../utils/schema'
import { log } from '../utils/helpers'
import { fetchSurveysSuccess } from '../actions/surveys'

class App extends Component {

  render() {
    fetch('/api/surveys')
      .then((response) => response.json())
      .then(log('API response in JSON'))
      .then((results) => {
        //const normalisedState = normalize(survey, surveysSchema)

        console.group("State")
        console.log("data", results );
        console.log("spread res", ...results.survey_results);
        //console.log("Normalised state", normalisedState);
        console.groupEnd()
        return results
      })
      .catch((e) => console.error("error", e))

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
