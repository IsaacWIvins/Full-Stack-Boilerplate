import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { Query } from "react-apollo";
import logo from '../logo.svg';
import { GET_USER_INFO } from '../graphql/queries.js';

class About extends Component {
  render() {
    return (
      <Query query={GET_USER_INFO} variables={{ id: 1 }}>
        {({loading, data, error }) => {
          if (loading) return <h1>loading</h1>
          if (error) return <h1>error</h1>
          return (
            <div className="About-Container">
              <header className="App-header">
                <h3>About</h3>
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default About;
