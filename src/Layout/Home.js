import React, { Component } from 'react'
import avatar from '../Images/avatar1.JPG'

import '../Style/Home.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <h1 className="home-welcome">Hello Elena!</h1>
          <img className="home-avatar" src={avatar} alt="avatar"/>
        </div>
      </>
    )
  }
}
