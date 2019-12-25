import React,{ Component } from 'react'

import { Form,
  Input,
  Button
}from 'antd'

import './Register.scss'

class Register extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: []
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.authActions.SignUp({
          values
        })
      }
    })
  }

  handleConfirmBlur = e => {
    const { value } = e.target

    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props

    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='main-register'>
        <div className='register-form'>
          <Form  onSubmit={this.handleSubmit}>

            <h1>Sing Up</h1>

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
                <Input placeholder='E-mail'
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  }
                ]
              })(
                <Input.Password placeholder='Password'/>
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  }
                ]
              })(
                <Input.Password
                  placeholder='Confirm Password'
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('nickname', {
                rules: [{
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true 
                }]
              })(
                <Input placeholder='Nickname'/>
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
              >
                Register
              </Button>
              <div>or</div>
              <h4>
                <a href='/login'>
                  Back to Login
                </a>
              </h4>
            </Form.Item>

          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create({ name: 'register' })(Register)