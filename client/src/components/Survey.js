import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExpandingList from './ExpandingList'

class Survey extends Component {
  render() {
    const survey = this.props.surveys[this.props.surveyIndex]

    return (
      <div>
        <h1>{survey.name}</h1>
        {survey.themes
          ? (
            <ExpandingList heading={survey.themes[0]}>
              <h1>Child Content</h1>
              <div>
                <span>
                  <h1>Nested Child w/ margin</h1>
                </span>
              </div>
            </ExpandingList>
          )
          : <p>Loading</p>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { surveys, themes, questions, responses, loading } = state

  return {
    surveys,
    themes,
    questions,
    responses,
    loading,
  }
}

export default connect(mapStateToProps)(Survey)
