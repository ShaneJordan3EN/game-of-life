import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Square from './Square';


class Board extends Component {
  renderSquare(x, y, squareDiameter) {
    return (
      <Square
        value={this.props.squares[x][y]}
        onClick={() => this.props.onClick(x, y)}
        squareDiameter={squareDiameter}
      />
    );
  }

  gridCreator(gridSize) {
    const gridLength = Math.sqrt(gridSize);
    const squareDiameter = 510/gridLength;
    const grid = [];
    for (let x = 0; x < gridLength; x++) {
      const columns = [];

      for (let y = 0; y < gridLength; y++) {
        columns.push(this.renderSquare(x, y, squareDiameter));
      }

      const row = (
        <div>
          {columns}
        </div>
      );

      grid.push(row);
    }
    return grid;
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Segment raised>
            <div>
              {this.gridCreator(this.props.gridSize)}
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Board;
