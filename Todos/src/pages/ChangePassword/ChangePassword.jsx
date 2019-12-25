import React, { Component } from 'react'

import { Form, Input, Button } from 'antd'

import './ChangePassword.scss'

class ChangePassword extends Component {

  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form

    return(
      <div className = 'changepassword-conteiner'>

        <Form onSubmit = { this.handleSubmit } className='changepassword'>

          <h1>Change Password</h1>

          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                }
              ]
            })(
              <Input placeholder='E-mail'/>)
            }
          </Form.Item>

          <Form.Item>
            <Button
              href='/login'
              type='primary'
              htmlType='submit'
            >
              Send
            </Button>
          </Form.Item>

        </Form>
      </div>
    )
  }
}


export default Form.create({ name: 'register' })(ChangePassword)