import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSurveyData } from '../actions/surveys'

class Card extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSurveyData(`${this.props.survey.url}`))
  }

  render() {
    const {
      name,
      participant_count,
      response_rate,
    } = this.props.survey
    const response_percentage = `${Math.round(response_rate*100)}%`

    return (
      // TODO: Router Link to survey page
      <div className="card">
        <h2>{name}</h2>
        <div>
          <em>{response_percentage}</em>
          <p>Participation</p>
        </div>
        <div>from {participant_count} respondants</div>
      </div>
    )
  }
}

export default connect()(Card)
