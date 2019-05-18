import React, { Component } from 'react';
import { Route } from 'react-router';

import TopNav from './Layout/TopNav';
import BottomNav from './Layout/BottomNav';

import Home from './Layout/Home';
import News from './Layout/NewsPage/News';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: null
    }
  }
  render() {
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
      </>
    );
  }
}

export default App;