import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BottomNav extends Component {
  render() {
    return (
      <>
        <nav className="bottom-nav">
          <Link to="/news">
            <i className="fas fa-users fa-lg"></i>
          </Link>

          <Link to="/charts">
            <i className="fas fa-chart-area fa-lg"></i>
          </Link>

          <i className="fas fa-plus fa-lg"></i>

          <Link to="/research-studies">
            <i className="fas fa-pen fa-lg"></i>
          </Link>

          <Link to="/notifications">
            <i className="fas fa-bell fa-lg"></i>
          </Link>
        </nav>
      </>
    )
  }
}
