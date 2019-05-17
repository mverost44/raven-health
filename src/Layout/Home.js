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
    title: "Nicotine Intake",
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#007AFF',
      data: [25, 20, 24, 19, 19, 16, 15],
    }]
  }

  options = {
    legend: {
      display: false
    },
    maintainAspectRatio: true
  }

  render() {
    return (
      <>
        <div className="home-container">
          <h1 className="home-greeting">Hello Max!</h1>
          <img className="home-avatar" src={avatar} alt="avatar"/>
          <h4 className="home-chart-title">Nicotine Intake YTD</h4>
          <Line
            className="home-chart"
            data={this.data}
            options={this.options}
          />
          <button className="home-cta-button">Get Involved</button>
        </div>
      </>
    )
  }
}
