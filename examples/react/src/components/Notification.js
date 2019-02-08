import React, { Component } from 'react'
import { subscribe, unsubscribe } from '../../../Shout'

export default class Notification extends Component {

  state = {
    message: ''
  }

  showMessage = (message) => {
    this.setState({ message });
  }

  componentWillMount() {
    subscribe('NOTIFY', this.showMessage);
  }

  componentWillUnmount() {
    unsubscribe('NOTIFY', this.showMessage);
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Notification</legend>
          <p>{this.state.message}</p>
        </fieldset>
      </div>
    );
  }
}
