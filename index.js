import { createBoard } from './helpers/functions.js';

const columns = 9;
const rows = 9;
const board = createBoard(columns, rows);
console.table(board);
