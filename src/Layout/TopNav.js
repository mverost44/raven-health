import React, { Component } from 'react'

export default class TopNav extends Component {
  render() {
    const styledTitle = (
      <>
        <p className="top-nav-title">Raven <span className="top-nav-span">Health</span></p>
      </>
    )

    const pageTitle = (
      <p className="top-nav-title">{this.props.pageTitle}</p>
    )
    return (
      <>
        <nav className="top-nav">
          <i className="fa-inverse fas fa-bars fa-lg"></i>
          {this.props.pageTitle ? pageTitle : styledTitle}
          <i className="fa-inverse fas fa-search fa-lg"></i>
        </nav>
      </>
    )
  }
}
