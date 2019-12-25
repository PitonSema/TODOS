import React, { Component } from 'react'
import { Spin } from 'antd'

class Loading extends Component {
  
  render(){
    const loading = this.props.tasks.isLoading
    return(
      loading?false:<div className='main_spin'><Spin size="large"/></div>
    )
  }
}

export default Loading