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
