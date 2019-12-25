import { FETCH_AUTH, SUCCESS_AUTH, SUCCESS_LOGOUT } from '../constants'

const userData = localStorage.getItem('auth')

const initialState = {
  isFetching: false,
  isLogged: !!localStorage.getItem('token'),
  data: userData
}

export default (state = initialState, action) =>{
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        isFetching: true
      }

    case SUCCESS_AUTH:
      return {
        isFetching: false,
        isLogged: true,
        data: action.payload
      }

    case SUCCESS_LOGOUT:
      return {
        ...state,
        isFetching: false,
        isLogged: false
      }

    default:
      return state
  }
  
}
