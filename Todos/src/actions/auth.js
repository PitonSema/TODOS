import { FETCH_AUTH, SUCCESS_AUTH, SUCCESS_LOGOUT } from '../constants'

import { message } from 'antd'
import { apiAuth } from '../api'

export const SignUp = (data) => async (dispatch) => {
  try{
    apiAuth.post('/auth/signUp', {
      email:data.values.email,
      password:data.values.password,
      userName: data.values.nickname
    }).then(res => {
      window.location.assign('/login')
      message.success('Are you registered')
    }).catch(function(error){
      message.error('Error!')
    })
  } catch(error){
    console.log(error)
  }
}

export const userLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_AUTH })

    apiAuth.post('/auth/signIn', {
      password:data.password,
      email:data.login
    }).then(res=>{
      localStorage.setItem('token', res.data.token)
      dispatch({
        type: SUCCESS_AUTH,
        payload: data
      })
      message.success('You logged in TODOS')
    }).catch(function (error) {
      if (error.response.status===400) {
        message.error('Wrong password or login!')
      }
    })

  } catch(error) {
    console.log(error)
  }
}

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_AUTH })

    localStorage.removeItem('token')

    dispatch({
      type: SUCCESS_LOGOUT
    })
  } catch(error) {
    console.log(error)
  }
}