export function renderBoard(board) {
    const parentdiv = document.querySelector('.board-container');
    parentdiv.innerHTML = '';
    for (let i = 1; i < board.length - 1; i++) {
        const row = document.createElement('div');
        row.className = 'board-container__row';
        parentdiv.appendChild(row);
        for (let j = 1; j < board[i].length - 1; j++) {
            const childdiv = document.createElement('div');
            const position = board[i][j];
            childdiv.addEventListener('click', () => {
                if (position === 0) {
                    board[i][j] = 1;
                }
                if (position === 1) {
                    board[i][j] = 0;
                }
                // Old code:
                // position === 0 ? (board[i][j] = 1) : (board[i][j] = 0);
                renderBoard(board);
            });
            childdiv.className = 'cell';
            if (position === 1) {
                childdiv.classList.add('cell--alive');
            }
            if (position === 0) {
                childdiv.classList.add('cell--dead');
            }

            row.appendChild(childdiv);
        }
    }
    return parentdiv;
}
