import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header';
import Tasks from './components/tasks';
import Main from './components/main';
// import './App.css';

const NotFound = () => <h1 style={{textAlign: 'center'}}>404 Page not found!</h1>

export default () => (
<Router>
  <div>
    <Header />
    <div className="container well">
      <Switch>
        <Route path="/tasks/:id" component={Tasks}/>
        <Route path="/description/:id" component={Main}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </div>
</Router>)
