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

    const styleText = (percentage_decimal) => {
      const red = 20 + 170 * (1 - percentage_decimal)
      const green = 160 * percentage_decimal
      const blue = 90

      return [red, green, blue]
    }

    return (
      // TODO: Router Link to survey page
      <div className="card">
        <div className="backdrop"></div>
        <h2>{name}</h2>
        <div>
          <span className="card-percentage">
            <em style={{color: `rgb(${styleText(response_rate)})`}}>
              {response_percentage}
            </em>
            <p>Participation</p>
          </span>
          <span>
            <em>{participant_count}</em>
            <p>respondants</p>
          </span>
        </div>
      </div>
    )
  }
}

export default connect()(Card)
