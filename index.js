import { createBoard, getNextBoard } from './helpers/functions.js';
import { renderBoard } from './helpers/domFunctions.js';

// Config section
const columns = 40;
const rows = 40;
const maxGenerations = 30;
const intervalTime = 1000;

// Init section
let board = createBoard(columns, rows);
let intervalCounter = 0;

// Render board in console
// Need to import getBoardToRender

// const runGame = setInterval(() => {
//     getBoardtoRender(board);
//     board = getNextBoard(board);

//     if (intervalCounter === maxGenerations) {
//         clearInterval(runGame);
//     }
//     intervalCounter += 1;
// }, intervalTime);

const runGame = setInterval(() => {
    renderBoard(board);
    board = getNextBoard(board);

    if (intervalCounter === maxGenerations) {
        clearInterval(runGame);
    }
    intervalCounter += 1;
}, intervalTime);
