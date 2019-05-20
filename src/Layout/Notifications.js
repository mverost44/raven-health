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
            <h3 className="notification-title">Notification Title</h3>
            <p className="notification-body">Lorem ipsum dolor sit amet, an facer velit fierent eam. Aperiri labores percipitur.</p>
          </div>
        </div>
      </>
    )

    return (
      <>
      <div className="notifications-banner">Recent</div>
        <div className="notifications-container">
          {notification}
          {notification}
          {notification}
        </div>
      </>
    )
  }
}
