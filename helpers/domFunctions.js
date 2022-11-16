export function renderBoard(board) {
    const parentdiv = document.querySelector('.board-container');
    parentdiv.innerHTML = '';
    for (let i = 1; i < board.length - 1; i++) {
        const row = document.createElement('div');
        row.className = 'board-container__row';
        parentdiv.appendChild(row);
        for (let j = 1; j < board[i].length - 1; j++) {
            const cellStatus = board[i][j] === 0;
            const childdiv = document.createElement('div');
            childdiv.addEventListener('click', () => {
                cellStatus ? (board[i][j] = 1) : (board[i][j] = 0);
                renderBoard(board);
            });

            childdiv.className = 'cell';
            if (!cellStatus) {
                childdiv.classList.add('cell--alive');
            }
            if (cellStatus) {
                childdiv.classList.add('cell--dead');
            }

            row.appendChild(childdiv);
        }
    }
    return parentdiv;
}
