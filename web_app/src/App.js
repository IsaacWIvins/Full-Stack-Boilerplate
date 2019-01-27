import React, { Component } from 'react';
import { Query } from "react-apollo";
import logo from './logo.svg';
import { GET_USER_INFO } from './graphql/queries.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Query query={GET_USER_INFO} variables={{ id: 1 }}>
        {({loading, data, error }) => {
          if (loading) return <h1>loading</h1>
          if (error) return <h1>error</h1>
          console.log('data: ', data)
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default App;
