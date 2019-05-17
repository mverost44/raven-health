import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BottomNav extends Component {
  render() {
    return (
      <>
        <nav className="bottom-nav">
          <Link
            to="/"
          >
            <i className="fa-inverse fas fa-home fa-lg"></i>
          </Link>

          <i className="fa-inverse fas fa-heartbeat fa-lg"></i>
          <i className="fa-inverse fas fa-plus fa-lg"></i>
          <i className="fa-inverse fas fa-users fa-lg"></i>
          <i className="fa-inverse fas fa-bell fa-lg"></i>
        </nav>
      </>
    )
  }
}
