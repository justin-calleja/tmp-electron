import React, { Component } from 'react'
import AnswerInput from '../AnswerInput'
import './App.css'

const electron = window.require('electron')
const ipc = electron.ipcRenderer

ipc.on('pkg-json', (event, arg) => {
  console.log('JSON is:', arg)
})

class App extends Component {
  constructor (props) {
    super(props)

    this.fireMsg = this.fireMsg.bind(this)
  }

  fireMsg () {
    ipc.send('read-pkg-json')
  }

  render () {
    return (
      <div>
        <button onClick={this.fireMsg}>Get package.json</button>
        <div>hello</div>
        <AnswerInput />
      </div>
    )
  }
}

export default App
