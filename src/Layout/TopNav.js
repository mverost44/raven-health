import React, { Component } from 'react'

export default class TopNav extends Component {

  openNav = () => {
    document.getElementById("sidenav").style.width = "250px";
  }

  render() {
    const styledTitle = (
      <>
        <h1 className="top-nav-title">Raven <span className="top-nav-span">Health</span></h1>
      </>
    )

    const pageTitle = (
      <p className="top-nav-title">{this.props.pageTitle}</p>
    )

    return (
      <>
        <nav className="top-nav">
          <i className="fa-inverse fas fa-bars fa-lg"
            onClick={() => this.openNav()}
          ></i>
          {this.props.pageTitle ? pageTitle : styledTitle}
        </nav>
      </>
    )
  }
}
