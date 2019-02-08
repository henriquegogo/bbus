import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Main />  
      </div>
    );
  }
}
