const populate = (squares) => {
//When calling this function it runs through all co-ords to check if there are any neighbours.
//it will 100% try to grabd squares[-1][0] which doesnt exist and im trying to handle that by checking for null.
//However im getting a 'TypeError: Cannot read property '1' of undefined' at line 10 when its called.

  for (let x = 0; x < squares.length; x++) {
    for (let y = 0; y < squares[y].length; y++) {
      let neighbours = 0;
      if (squares != null) {
        if (squares[x - 1][y + 1] != null  && squares[x - 1][y + 1] === 1) {
          neighbours++;
        }
        if (squares[x - 1][y] != null && squares[x - 1][y] === 1) {
          neighbours++;
        }
        if (squares[x - 1][y - 1] != null && squares[x - 1][y - 1] === 1) {
          neighbours++;
        }
        if (squares[x][y - 1] != null && squares[x][y - 1] === 1) {
          neighbours++;
        }
        if (squares[x][y + 1] != null && squares[x][y + 1] === 1) {
          neighbours++;
        }
        if (squares[x + 1][y + 1] != null && squares[x + 1][y + 1] === 1) {
          neighbours++;
        }
        if (squares[x + 1][y] != null && squares[x + 1][y] === 1) {
          neighbours++;
        }
        if (squares[x + 1][y - 1] != null && squares[x + 1][y - 1] === 1) {
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
