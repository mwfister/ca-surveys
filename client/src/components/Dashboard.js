import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Surveys</h1>
        <p>{JSON.stringify(this.props.surveys)}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { }
}

export default connect(mapStateToProps)(Dashboard)
