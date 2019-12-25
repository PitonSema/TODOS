import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Header, Main } from '../'

export default ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest}
      render={props => (
        auth.isLogged
          ? <Main>
              <Header/>
              <Component {...props} />
            </Main>
          : <Redirect to='/login' />
      )}
    />
  )
}
