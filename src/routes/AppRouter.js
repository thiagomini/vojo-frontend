import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from '../views/Homepage'
import Login from '../views/Login'
import JobsView from '../views/job/JobsView'

export default function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/jobs" component={JobsView}/>
      </Switch>
    </Router>
  )
}
