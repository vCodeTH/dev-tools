import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import Example from './components/Example'

const RouteMain = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Example} />
    </Switch>
  </App>
)

export {
  RouteMain
}
