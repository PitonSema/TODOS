import Loading from './Loading'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { tasks, auth } from '../../actions'
export default connect(
  (state) => ({
    tasks: state.tasks,
    auth: state.auth
  }),
  (dispatch) => ({
    tasksActions: bindActionCreators(tasks, dispatch),
    authActions: bindActionCreators(auth, dispatch)
  })
)(Loading)