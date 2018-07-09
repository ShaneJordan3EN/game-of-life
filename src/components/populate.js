const populate = (squares, gridSize) => {
  let gridLength = Math.sqrt(gridSize);

  for (let x = 0; x < gridLength; x++) {
    for (let y = 0; y < gridLength; y++) {
      let neighbours = 0;
      if (squares != null) {
        if ((x - 1) >= 0 && (y + 1) < gridLength  && squares[x - 1][y + 1] === 1) {
          neighbours++;
        }
        if ((x - 1) >= 0 && squares[x - 1][y] === 1) {
          neighbours++;
        }
        if ((x - 1) >= 0 && (y - 1) >= 0 && squares[x - 1][y - 1] === 1) {
          neighbours++;
        }
        if ((y - 1) >= 0 && squares[x][y - 1] === 1) {
          neighbours++;
        }
        if ((y + 1) < gridLength && squares[x][y + 1] === 1) {
          neighbours++;
        }
        if ((x + 1) < gridLength && (y + 1) < gridLength && squares[x + 1][y + 1] === 1) {
          neighbours++;
        }
        if ((x + 1) < gridLength && squares[x + 1][y] === 1) {
          neighbours++;
        }
        if ((x + 1) < gridLength && (y - 1) >= 0 && squares[x + 1][y - 1] === 1) {
          neighbours++;
        }

        if (squares[x][y] === 1) {
          if (neighbours < 2) {
            squares[x][y] = 0;
          } else if (neighbours > 4) {
            squares[x][y] = 0;
          }
        } else if (squares[x][y] === 0) {
          if (neighbours === 3) {
            squares[x][y] = 1;
          }
        }
      }
    }
  }

  return squares;
}

export default populate;
