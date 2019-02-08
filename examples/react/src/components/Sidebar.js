import React, { Component } from 'react'
import Notification from './Notification'
import { subscribe } from 'shout'

export default class Sidebar extends Component {

  state = {
    hide: false,
    hasNotification: false
  }

  verifyNotification = (message) => {
    this.setState({ hasNotification: message ? true : false });
  }

  componentWillMount() {
    subscribe('NOTIFY', this.verifyNotification);
  }

  render() {
    return (
      <aside>
        {this.state.hide ? null : <Notification />}
        <button onClick={() => this.setState({hide: !this.state.hide})}>Toggle notification area</button>
        <b>{this.state.hasNotification ? 'Has notification' : 'No notification'}</b>
      </aside>
    );
  }
}
