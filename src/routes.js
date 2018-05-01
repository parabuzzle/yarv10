import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import BuildLog from './pages/BuildLog';
import notfound from './pages/notfound';

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/build" component={BuildLog}/>
        <Route exact path="/about" component={About}/>
        <Route component={notfound} />
      </Switch>
    </Router>
  </div>
)
export default Routes
