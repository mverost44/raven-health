import React, { Component } from 'react'

import '../Style/Notifications.css'

import avatar2 from '../Images/avatar2.JPG'

export default class Notifications extends Component {
  render() {
    const notification = (
      <>
        <div className="notification-container">
          <img className="notification-avatar" src={avatar2} alt="avatar"/>
          <div className="notification-text">
            <h3 className="notification-title">Hey There!</h3>
            <p className="notification-body">Have anything you want to say? We love feedback! The + sign in the bottom menu will take you to our feedback page. Just write your comment and click post!</p>
          </div>
        </div>
      </>
    )

    return (
      <>
      <div className="notifications-banner">Recent</div>
        <div className="notifications-container">
          {notification}
        </div>
      </>
    )
  }
}
