import React, { Component } from 'react';
import { Button, Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';
import Square from './Square';


class Board extends Component {
  renderSquare(x, y) {
    return (
      <Square
        value={this.props.squares[x][y]}
        onClick={() => this.props.onClick(x, y)}
      />
    );
  }

  gridCreator(gridSize) {
    const gridLength = Math.sqrt(gridSize);
    const grid = [];
    for (let x = 0; x < gridLength; x++) {
      const columns = [];

      for (let y = 0; y < gridLength; y++) {
        columns.push(this.renderSquare(x,y));
      }

      const row = (
        <div className="board-row">
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
