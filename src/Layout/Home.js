import React, { Component } from 'react'
import avatar from '../Images/avatar1.JPG'
import { Link } from 'react-router-dom'

import '../Style/Home.css'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      // hi
    }
  }

  render() {
    return (
      <>
        <div className="home-container">
          <h1 className="home-greeting">Hello, Max!</h1>
          <img className="home-avatar" src={avatar} alt="avatar"/>
          <h3 className="home-feature-heading">New Feature Alert!</h3>
          <p className="home-feature-text">We’ve teamed up with various Market Research Groups to bring paid research studies right to your phone.<br/><br/> Click the button below to see how you can get involved and get paid, all from the comfort of your home.</p>
          <Link to="/research-studies"><button className="home-cta-button">Get Involved</button></Link>
          <p className="home-ps">(And get paid!)</p>
        </div>
      </>
    )
  }
}
