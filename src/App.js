import React, { Component } from 'react';
import classes from './App.css';
import Layout from './containers/Layout/Layout';
import Main from './containers/Main/Main';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Main />
        </Layout>
      </div>
    );
  }
}
// <Layout> <Main /> </Layout>

export default App;
