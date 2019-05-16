import React from 'react';
import { Route } from 'react-router'

import TopNav from './Layout/TopNav'
import BottomNav from './Layout/BottomNav'
import Home from './Layout/Home'

import './App.css';

function App() {
  return (
    <>
      <Route
        path="/"
        render={() => (
          <TopNav />
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
    </>
  );
}

export default App;
