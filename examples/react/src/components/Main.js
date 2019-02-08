import React, { Component } from 'react'
import { dispatch } from 'shout'

export default class Main extends Component {

  notify = () => {
    dispatch('NOTIFY', this.message.value);
  }

  render() {
    return (
      <main>
        <input type='text' placeholder='Type something' ref={r => { this.message = r }} onChange={this.notify} />
        <button onClick={this.notify}>Notify</button>
      </main>
    );
  }
}
