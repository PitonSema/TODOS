import React, { Component } from 'react'

import { Tabs } from 'antd'

import Task from './components'

import './Tasks.scss'

const { TabPane } = Tabs

class Tasks extends Component {

  render(){

    const data = this.props.tasks.data
    return(
      <div className='tasks-container'>
        <div className='tasks'>

          <h1 className='heading'>Tasks</h1>

          <Tabs defaultActiveKey='2'>

          <TabPane
              tab='ALL'
              key='1'
            >
              <Task data={data} completed={'ALL'}/>
            </TabPane>

            <TabPane
              tab='Open'
              key='2'
            >
              <Task data={data} completed={true}/>
            </TabPane>

            <TabPane
              tab='Completed'
              key='3'
            >
              <Task data={data} completed={false}/>
            </TabPane>

          </Tabs>
        </div>
      </div>
    )
  }
}

export default Tasks