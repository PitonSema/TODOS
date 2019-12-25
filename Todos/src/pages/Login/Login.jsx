import React,{ Component } from 'react'

import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd'

import './Login.scss'

class Login extends Component {
  state = {
    login: null,
    password: null
  }

  

  onChangeInput = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }

  onSubmit = () => {
    const { authActions } = this.props
    const { login, password } = this.state

    if (login && password) {
      authActions.userLogin({
        login,
        password
      })

    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
      }
    })
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form

    return (
      <div className='login-container'>
        <div  className='login-form'>

          <Form onSubmit={this.handleSubmit}>

            <h1>Login In</h1>

            <Form.Item>
              {getFieldDecorator('username', {
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
                <Input
                  prefix={<Icon type='user'/>}
                  placeholder='Username'
                  onChange={(e) => this.onChangeInput(e, 'login')}
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: 'Please input your Password!'
                }]
              })(
                <Input
                  prefix={<Icon type='lock'/>}
                  type='password'
                  placeholder='Password'
                  onChange={(e) => this.onChangeInput(e, 'password')}
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a 
                className='login-form-forgot'
                href='/forgot'
              >
                Forgot password
              </a>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                onClick={this.onSubmit}
              >
                Log in
              </Button>
              Or <a href='/register'>register now!</a>
            </Form.Item>

          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create({ name: 'normal_login' })(Login)