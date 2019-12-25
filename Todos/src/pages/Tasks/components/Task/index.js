import Task from './Task'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { tasks } from '../../../../actions'

export default connect(
  (state) => ({
    tasks: state.tasks
  }),
  (dispatch) => ({
    tasksActions: bindActionCreators(tasks, dispatch)
  })
)(Task)
