import React, { Component } from 'react';
import Board from './Board';
import GridButton from './GridButton';
import Start from './Start';
import Stop from './Stop';
import Reset from './Reset';
import populate from './populate';
import '../styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGridSize: 25,
      squares: this.createArrayOfSquares(25)
    };
  }

  createArrayOfSquares(gridSize) {
    let gridLength = Math.sqrt(gridSize);
    let squares = Array(gridLength);
    for(let x = 0; x < gridLength; x++) {
      squares[x] = Array(gridLength).fill(0);
    }
    return squares;
  }

  handleClick(x, y){
    const squares = this.state.squares;
    if (squares[x][y] === 0) {
      squares[x][y] = 1
    } else {
      squares[x][y] = 0
    }
    this.setState({
      squares: squares,
    });
  }

  handleGridButtonClick(gridSize){
    this.setState({
      currentGridSize: gridSize,
      squares: this.createArrayOfSquares(gridSize),
    });
  }

  handleStartStopButtonClick(start) {
    this.setState(state => {
      if (!start) {
        clearInterval(this.intervalId);
      } else {
        this.intervalId = setInterval(
          () => this.tick(),
          1000
        );
      }
    });
  };

  tick() {
    const squares = populate(this.state.squares, this.state.currentGridSize);
    this.setState({
      squares: squares
    });
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
    }

  handleResetClick() {
    this.handleStartStopButtonClick(false);
    this.setState({
      squares: this.createArrayOfSquares(this.state.currentGridSize)
    });
  }

  render() {
    return (
      <div className="App">
        <Board
          squares={this.state.squares}
          onClick={(x, y) => this.handleClick(x, y)}
          gridSize={this.state.currentGridSize}
        />
        <GridButton
          gridSize={25}
          onClick={() => this.handleGridButtonClick(25)}
        />
        <GridButton
          gridSize={100}
          onClick={() => this.handleGridButtonClick(100)}
        />
        <GridButton
          gridSize={225}
          onClick={() => this.handleGridButtonClick(225)}
        />
        <Start
          onClick={() => this.handleStartStopButtonClick(true)}
        />
        <Stop
          onClick={() => this.handleStartStopButtonClick(false)}
        />
        <Reset
          onClick={() => this.handleResetClick()}
        />
      </div>
    );
  }
}

export default App;
