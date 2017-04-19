import React, { Component } from 'react'

class AnswerInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <form>
        <div className='form-group'>
          <label htmlFor='answer'>Answer: </label>
          <input type='text' className='meh' id='answer' />
        </div>
      </form>
    )
  }
}

export default AnswerInput
