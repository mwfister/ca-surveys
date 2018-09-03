import React, { Component } from 'react'
import classnames from 'classnames'

export default class ExpandingList extends Component {
  constructor(props) {
    super(props)
    this.listNode = React.createRef()
  }

  state = {
    toggled: false,
    dynHeight: '0px',
    dynPosition: '0px'
  }

  }

  handleClick = () => {
    this.setState((prevState, props) => ({
      toggled: !prevState.toggled,
      dynHeight: !prevState.toggled
        ? `${this.listNode.current.clientHeight}` + 'px'
        : '0px',
      dynPosition: prevState.toggled
        ? `-${this.listNode.current.clientHeight}` + 'px'
        : '0px'
    }))
  }

  render() {
    return (
      <div className="expanding-list" onClick={this.handleClick}>
        <div className="dropdown-bar">
          <h3>{this.props.heading}</h3>
        </div>
        <div className="sliding-panel-wrapper" style={{
          height: this.state.dynHeight
        }}>
          <div
            className={"sliding-panel"}
            ref={this.listNode}
            style={{ top: this.state.dynPosition }}
          >
            {this.props.children}
          </div>
        </div>
        <h1>CONTENT THAT SHOULD MOVE</h1>
      </div>
    )
  }
}
