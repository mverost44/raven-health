import React, { Component } from 'react'
import axios from 'axios'

import '../Style/Posts.css'

export default class Posts extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      feedback: ''
    }
  }

handleChange = event => {
  const updatedField = { [event.target.name]: event.target.value }
  this.setState(updatedField)
}

handleSubmit = (name, feedback) => {
  return axios({
    method: 'POST',
    url: 'https://lit-scrubland-16118.herokuapp.com/posts',
    data: {
      post: {
        name: name,
        feedback: feedback
      }
    }
  })
  .then(() => this.setState({ name: '', feedback: '' }))
}

  render() {
    const { name, feedback } = this.state
    return (
      <>
        <div className="feedback-container">
          <div className="form-container">
            <h1 className="form-title">Feedback</h1>
            <p className="form-text">Thank you for taking the time to look through Raven Health!</p>
            <form className="pure-form">
                  <input
                     type="text"
                     className="pure-input"
                     placeholder="Name (Optional)"
                     name="name"
                     onChange={(event) => this.handleChange(event)}
                     value={name}
                   />
                  <textarea
                    className="pure-input"
                    placeholder="Feedback"
                    name="feedback"
                    onChange={(event) => this.handleChange(event)}
                    value={feedback}
                  ></textarea>
            </form>

            <button
            className="form-button"
            onClick={() => this.handleSubmit(name, feedback)}
            >Submit</button>
          </div>
        </div>
      </>
    )
  }
}

// <input
//   name="username"
//   className="form-username"
//   value={this.state.username}
// />
// <input
//   name="feedback"
//   className="form-feedback"
//   onChange={this.handleChange}
//   value={this.state.feedback}
// />
// <button
//   className="form-submit"
//   onChange={this.handleChange}
//   onClick={this.handleSubmit}
//   type="submit"
//   >Submit</button>
