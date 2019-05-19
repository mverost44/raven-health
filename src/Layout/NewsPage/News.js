import React, { Component } from 'react'
import Posts from './Posts'

import '../../Style/News.css'

export default class News extends Component {
  constructor() {
    super()
      this.state = {
        newsFeed: null
      }
    }

componentDidMount() {
  fetch('https://www.reddit.com/r/health/search.json?q=vaping&limit=10')
     .then(res =>  res.json())
     .then(function(posts) {
        return posts
      })
     .then(posts => this.setState({ newsFeed: posts.data.children }))
  }

  render() {
    const { newsFeed } = this.state

    if (!newsFeed) {
      return (
        <div className="news-container">
          <h1 className="loading-screen">Loading...</h1>
        </div>
      )
    }

    return (
      <>
        <div className="news-container">
          {newsFeed.map(post => (
            <Posts
              key={Math.random()}
              title={post.data.title}
              body={post.data.selftext}
              author={post.data.author}
              image={post.data.preview ? post.data.preview.images[0].source.url : false }
            />
           )
          )}
        </div>
      </>
    )
  }
}
