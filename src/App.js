import React, { Component } from 'react';
import './global.scss';

import Header from './containers/Header';

import Main from './containers/Main';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
