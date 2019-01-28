import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { Query } from "react-apollo";
import logo from './logo.svg';
import { GET_USER_INFO } from './graphql/queries.js';
import './App.css';

import MainRoutes from './navigation/index.js';

class App extends Component {

  componentDidMount() {
    console.log('App --> CDM')
    console.log('this.props: ', this.props)
  }
  render() {
    return <MainRoutes />
  }
}

export default App;
