import React, { Component } from 'react'
import AnswerInput from '../AnswerInput'
import './App.css'

const electron = window.require('electron')
const ipc = electron.ipcRenderer
const clipboard = electron.clipboard

ipc.on('pkg-json', (event, arg) => {
  console.log('JSON is:', arg)
})

ipc.on('yank', (event, arg) => {
  console.log(clipboard.readText())
})

class App extends Component {
  constructor (props) {
    super(props)

    this.fireMsg = this.fireMsg.bind(this)
  }

  fireMsg () {
    ipc.send('read-pkg-json')
    console.log('clipboard.readText: ', clipboard.readText())
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
