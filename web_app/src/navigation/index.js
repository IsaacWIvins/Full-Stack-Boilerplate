import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from '../pages/home.js';
import About from '../pages/about.js';

class MainRoutes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
       </Router>
    );
  }
}

export default MainRoutes;
