import React, { Component } from 'react'
import Notification from './Notification'
import { subscribe } from '../../../Shout'

export default class Sidebar extends Component {

  state = {
    hasNotification: false
  }

  verifyNotification = (message) => {
    setTimeout(() => { this.setState({ hide: true }) }, 2000);
    this.setState({ hasNotification: message ? true : false });
  }

  componentWillMount() {
    subscribe('NOTIFY', this.verifyNotification);
  }

  render() {
    return (
      <aside>
        {this.state.hide ? null : <Notification />}
        <b>{this.state.hasNotification ? 'Has notification' : 'No notification'}</b>
      </aside>
    );
  }
}
