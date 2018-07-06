import React, { Component } from 'react';
import Board from './Board';
import GridButton from './GridButton';
import Start from './Start';
import Stop from './Stop';
import '../styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGridSize: 25,
      squares: Array(25).fill(0),
    };
  }

  createArrayOfSquares(gridSize) {
    let i = 0;
    let squares = Array(gridSize);
    let gridLength = Math.sqrt(gridSize);
    for(let x = 0; x < gridLength; x++) {
      for (let y = 0; y < gridLength; y++) {
        const square = {
           x: x,
           y: y,
           i: i
        }
        squares.push(square);
        i++;
      }
    }
  }

  handleClick(i){
    const squares = this.state.squares;
    if (squares[i] === 0) {
      squares[i] = 1
    } else {
      squares[i] = 0
    }
    this.setState({
      squares: squares,
    });
  }

  handleGridButtonClick(gridSize){
    this.setState({
      currentGridSize: gridSize,
      squares: Array(gridSize).fill(0),
    });
  }

  render() {
    return (
      <div className="App">
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
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
        <Start />
        <Stop />
      </div>
    );
  }
}

export default App;
