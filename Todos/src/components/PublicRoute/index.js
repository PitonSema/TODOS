import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PublicRoute from './PublicRoute'

import { auth } from '../../actions'

export default connect(
  (state) => ({
    auth: state.auth
  }),
  (dispatch) => ({
    postsActions: bindActionCreators(auth, dispatch)
  })
)(PublicRoute)
