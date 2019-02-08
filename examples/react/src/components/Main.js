import React, { Component } from 'react'
import { dispatch } from '../../../Shout'

export default class Main extends Component {

  notify = () => {
    dispatch('NOTIFY', this.message.value);
  }

  render() {
    return (
      <main>
        <input type='text' ref={r => { this.message = r }} onChange={this.notify} />
        <button onClick={this.notify}>Notify</button>
      </main>
    );
  }
}
