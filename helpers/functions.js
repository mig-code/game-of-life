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
                board[i].push(Math.floor(Math.random() * 2));
            }
        }
    }
    return board;
}
export function copyBoard(board) {
    const boardCopy = [];
    for (let i = 0; i < board.length; i++) {
        boardCopy.push([]);
        for (const j in board[i]) {
            boardCopy[i].push(board[i][j]);
        }
        // Old code:
        //     for (let j = 0; j < board[i].length; j++) {
        //         boardCopy[i].push(board[i][j]);
        //     }
    }
    return boardCopy;
}

export function countNearCells(board, column, row) {
    let count = 0;
    count +=
        board[row - 1][column - 1] +
        board[row - 1][column] +
        board[row - 1][column + 1] +
        board[row][column - 1] +
        board[row][column + 1] +
        board[row + 1][column - 1] +
        board[row + 1][column] +
        board[row + 1][column + 1];
    return count;
}

export function checkIfCellIsAlive(currentState, counter) {
    if (currentState === 0 && counter === 3) {
        return 1;
    }
    if (currentState === 1 && (counter === 2 || counter === 3)) {
        return 1;
    }
    return 0;
}

export function getNextBoard(board) {
    const boardCopy = copyBoard(board);
    for (let i = 1; i < board.length - 1; i++) {
        for (let j = 1; j < board[i].length - 1; j++) {
            const counter = countNearCells(board, j, i);
            boardCopy[i][j] = checkIfCellIsAlive(board[i][j], counter);
        }
    }
    return boardCopy;
}
export function getBoardtoRender(board) {
    const boardToRender = [];
    for (let i = 1; i < board.length - 1; i++) {
        boardToRender.push([]);
        for (let j = 1; j < board[i].length - 1; j++) {
            boardToRender[i - 1].push(board[i][j]);
        }
    }
    console.table(boardToRender);
    return boardToRender;
}
