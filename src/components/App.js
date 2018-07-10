import React, { Component } from 'react';
import Header from './Header';
import Game from './Game';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
