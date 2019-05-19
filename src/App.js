import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom'

import TopNav from './Layout/TopNav';
import BottomNav from './Layout/BottomNav';

import Home from './Layout/Home';
import News from './Layout/NewsPage/News';
import Research from './Layout/Research';
import Charts from './Layout/ChartsPage/Charts';
import Messages from './Layout/Messages';
import Notifications from './Layout/Notifications';
import Settings from './Layout/Settings';

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

        <Route
          exact path="/messages"
          render={() => (
            <Messages />
          )}
        />

        <Route
          exact path="/notifications"
          render={() => (
            <Notifications />
          )}
        />

        <Route
          exact path="/settings"
          render={() => (
            <Settings />
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
            <Link
              to="/messages"
              className="sidenav-link"
              onClick={() => this.closeNav()}>
              <i className="fa-inverse fas fa-envelope fa-lg"></i>
              Messages
            </Link>

            <Link
              to="/notifications"
              className="sidenav-link"
              onClick={() => this.closeNav()}>
                <i className="fas fa-bell fa-lg"></i>
                Notifications
                {notification}
            </Link>

            <Link
              to="/settings"
              className="sidenav-link"
              onClick={() => this.closeNav()}>
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
