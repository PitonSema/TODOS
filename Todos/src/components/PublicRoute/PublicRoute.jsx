import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route { ...rest } render={ props => (
      auth.isLogged
        ? <Redirect to='/' />
        : <Component { ...props } />
    )} />
  )
}

export default PublicRoute