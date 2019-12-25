import React, { Component } from 'react'

import {
  Dropdown,
  Menu,
  Icon,
  Modal,
  Input
} from 'antd'

import { Link } from 'react-router-dom'

import { Loading } from '../../../../components'

import './Task.scss'

class Task extends Component {

  state = {
    visible: false,
    title:'',
    id: ''
  }

  componentDidMount(){
    const { tasksActions } = this.props
    tasksActions.updatesTask()
  }

  handlerFieldInput = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  onDeleteTask(id, index){
    const { tasksActions } = this.props
    tasksActions.deleteTask(id, index)
  }

  onCompletedTask(id, done, index){
    const { tasksActions } = this.props
    tasksActions.completedTask(id, done, index)
  }

  
  showModal = (item) => {
    this.setState({
      visible: true,
      title : item.title,
      id: item._id
    })
  }

  handleOk = (e)=> {
    this.setState({
      visible: false
    })
    const { tasksActions } = this.props
    tasksActions.editTask(this.state.title, this.state.id)
  }

  handleCancel = e => {
    this.setState({
      visible: false
    })
  }

  render(){
    const { data, completed } = this.props
    return(
      <div>
        { data.map((item, index) =>(
          item.done===completed || completed==='ALL'?

          <div key={index} className='sentence'>
              <div className='task'>{item.title}</div>
              <div className='sentence-places'>
              <div className='sentence-status'>{item.done?<div className='notcomplete'><Icon type="close" /></div>:<div className='complete'><Icon type="check" /></div>}</div>
                <Dropdown
                  overlay={
                    <Menu>
                      {item.done===false?
                        <Menu.Item>
                          <Link to='#' onClick={()=>this.onCompletedTask(item._id, true, index)}>Not completed</Link>
                        </Menu.Item>
                        :false
                      }

                      {item.done===true?
                        <Menu.Item>
                          <Link to='#' onClick={()=>this.onCompletedTask(item._id, false, index)}>Completed</Link>
                        </Menu.Item>
                        :false
                      }

                      <Menu.Item>
                        <Link to='#' onClick={()=>this.onDeleteTask(item._id, index)}>Delete</Link>
                      </Menu.Item>

                      {item.done?
                        <Menu.Item>
                          <Link to='#'  onClick={()=>this.showModal(item)}>Edit</Link>
                        </Menu.Item>
                        :false
                      }

                    </Menu>
                  }>

                  <div to='#' className='ant-dropdown-link'>
                    Control<Icon type='down' />
                  </div>
                </Dropdown>
              </div>
            </div>:false
          ))}
          <Loading />
          {!data.length?<div className='notFound'>not Found</div>:false}
          <Modal
            title='Create task'
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Input
              onChange={(e)=>this.handlerFieldInput(e)}
              value={this.state.title}
            />
          </Modal>
      </div>
    )
  }
}
export default Task