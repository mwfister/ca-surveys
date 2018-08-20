import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Surveys</h1>
        {this.props.surveys.map((survey, index) => (
          <Card
            survey={survey}
            surveyIndex={index}
            key={survey.name}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ surveys: state.surveys })

export default connect(mapStateToProps)(Dashboard)
