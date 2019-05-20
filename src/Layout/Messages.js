import React, { Component } from 'react'
import axios from 'axios'
import Message from './Message'

import '../Style/Messages.css'

export default class News extends Component {
  constructor() {
    super()
      this.state = {
        messages: null
      }
    }

componentDidMount() {
  return axios({
    method: 'GET',
    url: 'https://lit-scrubland-16118.herokuapp.com/posts',
  })
     .then(res => this.setState({ messages: res.data.posts }))
     .catch(res => console.log(res))
  }

  render() {
    const { messages } = this.state

    if (!messages) {
      return (
        <div className="messages-container">
          <h1 className="loading-screen">Loading...</h1>
        </div>
      )
    }

    return (
      <>
        <div className="messages-container">
          {messages.map(message => (
            <Message
              key={message.id}
              name={message.name}
              feedback={message.feedback}
            />
           )
          )}
        </div>
      </>
    )
  }
}
