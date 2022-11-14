import { createBoard, getNextBoard, renderBoard } from './helpers/functions.js';

// Config section
const columns = 6;
const rows = 6;
const maxGenerations = 10;
const intervalTime = 1000;

// Init section
let board = createBoard(columns, rows);
let intervalCounter = 0;

// Render board

const runGame = setInterval(() => {
    renderBoard(board);
    board = getNextBoard(board);

    if (intervalCounter === maxGenerations) {
        clearInterval(runGame);
    }
    intervalCounter += 1;
}, intervalTime);
