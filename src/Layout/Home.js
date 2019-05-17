import React, { Component } from 'react'
import avatar from '../Images/avatar1.JPG'

import { Line } from 'react-chartjs-2';

import '../Style/Home.css'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      // hi
    }
  }

  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "JUUL Usage",
      backgroundColor: 'rgba(115, 194, 251, .6)',
      borderColor: 'rgb(255, 99, 132)',
      data: [25, 20, 24, 19, 19, 16, 15],
    }]
  }

  render() {
    return (
      <>
        <div className="home-container">
          <h1 className="home-greeting">Hello Elena!</h1>
          <img className="home-avatar" src={avatar} alt="avatar"/>
          <h3 className="home-welcome">Welcome Back!</h3>
          <Line
            className="home-chart"
            data={this.data}
            options={{ maintainAspectRatio: true }}
          />
          <button className="home-button">Get Involved</button>
        </div>
      </>
    )
  }
}
