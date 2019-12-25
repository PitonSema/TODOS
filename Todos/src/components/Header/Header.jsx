import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Modal,
  Input,
  Affix,
  message
} from 'antd'

import './Header.scss'

class Header extends Component {

  state = {
    visible: false,
    title:''
  }

  handlerFieldInput = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  logOut () {
    const { authActions } = this.props
    authActions.userLogout()
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    

    if(this.state.title.length!== 0){
      this.setState({
        visible: false,
        title:''
      })
      const { tasksActions } = this.props
      tasksActions.addTask(this.state.title)
    }else{
      message.warn('Enter values!')
    }
  }

  handleCancel = e => {
    this.setState({
      visible: false
    })
  }

  render () {
    return(
      <Affix offsetTop={this.state.top}>
        <div className='header-container'>

          <div className='header-logo'>TODOS</div>

          <Button type='primary' onClick={()=>this.showModal()}>Create a task</Button>

          <Link to='#' onClick={()=>this.logOut()}>
            Logout
          </Link>

          <Modal
            title='Create task'
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Input
              placeholder='WRITE YOUR TASK'
              onChange={(e)=>this.handlerFieldInput(e)}
              value={this.state.title}
            />
          </Modal>
        </div>
      </Affix>
    )
  }
}
export default Header