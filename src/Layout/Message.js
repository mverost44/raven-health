import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <>
        <div className="message-container">
        <h1 className="message-title">{this.props.name}</h1>
          <p className="message-body">
            {this.props.feedback}
          </p>
        </div>
      </>
    )
  }
}
