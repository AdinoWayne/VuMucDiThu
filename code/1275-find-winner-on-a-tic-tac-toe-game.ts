function tictactoe(moves: number[][]): string {
  // no one can win in 4 moves...
  if (moves.length < 5) return "Pending"
  
  const board = new Array(3)
  for (let i = 0; i < 3; i++) {
    board[i] = new Array(3).fill('')
  }
  
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      board[moves[i][0]][moves[i][1]] = 'A'
    } else {
      board[moves[i][0]][moves[i][1]] = 'B'
    }
  }
  
  function findWinner(player) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return player
      }
      else if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return player
      } 
      else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return player
      }
      else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return player
      }
    }
  }
  return findWinner('A') ? 'A' : findWinner('B') ? 'B' : moves.length < 9 ? 'Pending' : 'Draw'
};
