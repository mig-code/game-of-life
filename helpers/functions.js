export function createBoard(columns, rows) {
    const board = [];
    columns = columns + 2;
    rows = rows + 2;
    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let j = 0; j < columns; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
                board[i].push(null);
            } else {
                board[i].push(1);
            }
        }
    }
    return board;
}

export function countNearCells(columns, row, board) {
    let count = 0;
    count +=
        board[row - 1][columns - 1] +
        board[row - 1][columns] +
        board[row - 1][columns + 1] +
        board[row][columns - 1] +
        board[row][columns + 1] +
        board[row + 1][columns - 1] +
        board[row + 1][columns] +
        board[row + 1][columns + 1];
    return count;
}

export function copyBoard(board) {
    const boardCopy = [];
    for (let i = 0; i < board.length; i++) {
        boardCopy.push([]);
        for (let j = 0; j < board[i].length; j++) {
            boardCopy[i].push(board[i][j]);
        }
    }
    return boardCopy;
}
