import Login from './Login'

import { auth } from '../../actions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default connect(
  (state) => ({
    auth: state.login
  }),
  (dispatch) => ({
    authActions: bindActionCreators(auth, dispatch)
  })
)(Login)
