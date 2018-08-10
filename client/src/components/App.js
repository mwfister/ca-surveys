import React, { Component } from 'react';

import { normalize } from 'normalizr'
import surveysSchema from '../utils/schema'
import { log } from '../utils/helpers'

class App extends Component {

  render() {
    fetch('/api/survey_results/1.json')
      .then((response) => response.json())
      .then(log('API response in JSON'))
      .then(({ survey_result_detail: survey }) => {
        console.log("data", survey );
        const normalisedState = normalize(survey, surveysSchema)

        console.group("State")
        console.log("Normalised state", normalisedState);
        console.log(JSON.stringify(normalisedState));
        console.groupEnd()
        return normalisedState
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
