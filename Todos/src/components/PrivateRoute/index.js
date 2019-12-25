import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PrivateRoute from './PrivateRoute'
import { auth } from '../../actions'

export default connect(
  (state) => ({
    auth: state.auth
  }),
  (dispatch) => ({
    authActions: bindActionCreators(auth, dispatch)
  })
)(PrivateRoute)
