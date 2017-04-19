import React, { Component } from 'react'
import {
  Form,
  Div,
  Label,
  Input
} from 'glamorous'

class AnswerInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Form>
        <Div className='form-group'>
          <Label color='red' htmlFor='answer'>Answer: </Label>
          <Input type='text' className='meh' id='answer' />
        </Div>
      </Form>
    )
  }
}

export default AnswerInput
