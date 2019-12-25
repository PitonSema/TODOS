import React from 'react'
import { createBrowserHistory } from 'history'

import { Router, Switch } from 'react-router-dom'
import { Login, ChangePassword, Register, Tasks } from './pages'

import { PublicRoute, PrivateRoute } from './components'

import './App.scss'

const appHistory = createBrowserHistory()

export default () => {
  return (
    <Router history={appHistory}>
      <Switch>
        <PublicRoute component={Login} path='/login' />
        <PublicRoute component={Register} path='/register' />
        <PublicRoute component={ChangePassword} path='/forgot' />
        <PrivateRoute component={Tasks} path='/' exact />
      </Switch>
    </Router>
  )
}
