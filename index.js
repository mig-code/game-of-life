import { createBoard, getNextBoard, renderBoard } from './helpers/functions.js';

const columns = 3;
const rows = 3;
let board = createBoard(columns, rows);

renderBoard(board);
board = getNextBoard(board);
renderBoard(board);
board = getNextBoard(board);
renderBoard(board);
