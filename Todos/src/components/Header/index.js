import Header from './Header'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { auth, tasks } from '../../actions'
export default connect(
  (state) => ({
    auth: state.login,
    tasks: state.tasks
  }),
  (dispatch) => ({
    authActions: bindActionCreators(auth, dispatch),
    tasksActions: bindActionCreators(tasks, dispatch)
  })
)(Header)
