import Register from './Register'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { auth } from '../../actions'

export default connect(
  (state) => ({
    auth: state.login
  }),
  (dispatch) => ({
    authActions: bindActionCreators(auth, dispatch)
  })
)(Register)