import React, { Component } from 'react'
import classnames from 'classnames'

export default class ExpandingList extends Component {
  constructor(props) {
    super(props)
    this.listNode = React.createRef()
    this.dynHeight = '0px'
  }

  state = {
    toggled: false,
    dynHeight: '0px'
  }

  handleClick = () => {
    this.setState((prevState, props) => ({
      toggled: !prevState.toggled,
      dynHeight: !prevState.toggled
        ? `${this.listNode.current.clientHeight}` + 'px'
        : '0px'
    }))
  }

  // TODO: Fix overflow property moving child elements.
  render() {
    console.log("NODE", this.listNode);
    console.log("HEIGHT", this.state.dynHeight);
    return (
      <div className="expanding-list" onClick={this.handleClick}>
        <div className="dropdown-bar">
          <h3>{this.props.heading}</h3>
        </div>
        <div className="sliding-panel-wrapper" style={{
          height: this.state.dynHeight
        }}>
          <div
            className={classnames("sliding-panel", { expanded: this.state.toggled })}
            ref={this.listNode}
          >
            {this.props.children}
          </div>
        </div>
        <h1>CONTENT THAT SHOULD MOVE</h1>
      </div>
    )
  }
}
