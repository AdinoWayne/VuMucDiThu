function squareIsWhite(coordinates: string): boolean {
  const [c, r] = coordinates.split('')

  const board = Array(8).fill([]).map(x => Array(8).fill(false))
  const row = {
    0: 8,
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 0,
  }
  const col = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7
  }

  for (let i = 0; i < board.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < board[0].length; j+=2) {
        board[i][j] = true
      }
    } else {
      for (let j = 1; j < board[0].length; j+=2) {
        board[i][j] = true
      }
    }
  }

  return board[row[r]][col[c]]
};
