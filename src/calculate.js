

export function calculate(obj, x, y) {
  let board = obj.board;

  // update state
  board = boardClickUpdate(board, x, y);

  let message = "Ok";
  
  return {
    board: board, 
    message: "hello world"
  };
}

export function boardClickUpdate(board, x, y) {
    if(isOnBoard(x,y)){
        board[y][x] = (board[y][x] + 1) % 5
    }
  return board;
}

function isOnBoard(y, x) {
  if (y < 0 || y >= 12 || x < 0 || x >= 12) {
    return false;
  }
  return true;
}


