import React, { Component } from 'react';
import { connect } from 'react-redux'
import { normalize } from 'normalizr'

import surveysSchema from '../utils/schema'
import { log } from '../utils/helpers'
import { handleInitialData } from '../actions/surveys'

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { surveys } = state

  return {
    surveys,
  }
}

export default connect(mapStateToProps)(App)
