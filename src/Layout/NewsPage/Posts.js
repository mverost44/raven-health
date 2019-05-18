import React, { Component } from 'react'

export default class Posts extends Component {
  constructor() {
    super()
    this.state = {
      limited: true
    }
  }
  render() {
    const { limited } = this.state

    const body = (
      <p className="post-body">
        {this.props.body}
      </p>
    )

    const image = (
      <img className="post-image" src={String(this.props.image).replace('amp;s', 's')} alt="reddit" />
    )

    return (
      <>
        <div className={limited ? `${"post-container post-limiter"}` : `${"post-container"}`}>
          <div className="post-author">
            {this.props.author}
          </div>
          <h1 className="post-title">
            {this.props.title}
          </h1>
          {this.props.image ? image : body}
        </div>
        <div className="post-menu">
          <span
          onClick={() => this.setState({ limited: !limited })}
          >
            {limited ? 'See More' : 'See Less'}
          </span>
        </div>
      </>
    )
  }
}
