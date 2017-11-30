import { GAME_OVER, IN_PROGRESS, DRAW } from './gamesConstants'

export const checkBoard = (board, move, currentPlayer, movesCount) => {
  // Min number of moves to have a winner
  if (movesCount < 5) { return  IN_PROGRESS}

  // Check Row
  if (board[move.x].every(cell => cell === currentPlayer)) { return GAME_OVER }

  // Check Column
  if (board.map(row => row[move.y]).every(cell => cell === currentPlayer)) { return GAME_OVER }

  // Check Diagonal
  if (move.x === move.y && board[1][1] === board[0][0] && board[0][0]  === board[2][2]) { return GAME_OVER }

  // Check Anti-Diagonal
  if (board[1][1] !== null && board[0][2] === board[1][1] && board[1][1]  === board[2][0] ) { return GAME_OVER }

  // No Winner
  if (movesCount === 9) { return  DRAW }

  return IN_PROGRESS
}
