import React, { Component } from 'react'

import { Line, Doughnut } from 'react-chartjs-2';

import graphs from './../../Images/graphs.png'
import '../../Style/Charts.css'

export default class Charts extends Component {
  constructor() {
    super()
    this.state = {
      // hi
    }
  }

  lineData = {
    title: "Nicotine Intake",
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#007AFF',
      data: [25, 20, 24, 19, 19, 16, 15],
    }]
  }

  lineOptions = {
    legend: {
      display: false
    },
    maintainAspectRatio: false
  }

doughnutData = {
	labels: [
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#FF6384',
		'#36A2EB'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB'
		]
	}]
};

doughnutOptions = {
  legend: {
    display: false
  },
  maintainAspectRatio: true
}

  render() {
    return (
      <>
        <div className="charts-container">
          <h4 className="line-chart-title">Weekly Nicotine Intake</h4>
          <div className="doughnut-chart">
            <Doughnut
              data={this.doughnutData}
              options={this.doughnutOptions}
             />
          </div>
          <img className="charts-picture" src={graphs} alt="graphs" />
          <h4 className="line-chart-title">Nicotine Intake YTD</h4>
          <div className="line-chart">
            <Line
              data={this.lineData}
              options={this.lineOptions}
              style={{
                width: '85%',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </>
    )
  }
}
