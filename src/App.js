import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom'

import TopNav from './Layout/TopNav';
import BottomNav from './Layout/BottomNav';

import Home from './Layout/Home';
import News from './Layout/NewsPage/News';
import Research from './Layout/Research';
import Charts from './Layout/ChartsPage/Charts';

import avatar from './Images/avatar1.JPG'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: null
    }
  }

  closeNav = () => {
    document.getElementById("sidenav").style.width = "0";
  }

  render() {
    const notification = (
      <i className="fas fa-circle fa-2x">
        <span className="fa-layers-text">1</span>
      </i>
    )

    return (
      <>
        <Route
          path="/"
          render={() => (
            <TopNav
              pageTitle={this.state.pageTitle}
            />
          )}
        />

        <Route
          path="/"
          render={() => (
            <BottomNav />
          )}
        />

        <Route
          exact path="/"
          render={() => (
            <Home />
          )}
        />

        <Route
          exact path="/news"
          render={() => (
            <News />
          )}
        />

        <Route
          exact path="/research-studies"
          render={() => (
            <Research />
          )}
        />

        <Route
          exact path="/charts"
          render={() => (
            <Charts />
          )}
        />

        <div id="sidenav" className="sidenav">
          <div className="sidenav-header">
            <img className="sidenav-avatar" src={avatar} alt="avatar"/>
            <h3 className="sidenav-username">Max VeRost
              <br />
              <span className="sidenav-user-location">Boston, MA</span>
            </h3>
            <span className="closebtn" onClick={() => this.closeNav()}>&times;</span>
          </div>
          <div className="sidenav-link-container">
            <Link className="sidenav-link">
              <i className="fa-inverse fas fa-envelope fa-lg"></i>
              Messages
            </Link>

            <Link className="sidenav-link">
                <i className="fas fa-bell fa-lg"></i>
                Notifications
                {notification}
            </Link>

            <Link className="sidenav-link">
            <i className="fa-inverse fas fa-cog fa-lg"></i>
              Settings
            </Link>
          </div>
        </div>
      </>

    );
  }
}

export default App;
