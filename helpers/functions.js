export function createBoard(columns, rows) {
    const board = [];
    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let j = 0; j < columns; j++) {
            board[i].push(1);
        }
    }
    return board;
}
