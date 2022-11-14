import {
    createBoard,
    countNearCells,
    copyBoard,
    checkIfCellIsAlive,
} from './functions.js';

describe('Given createBoard function', () => {
    const columns = 6;
    const rows = 6;
    test('Return a board with all 1 and nulls in borders test [0][0]', () => {
        const board = createBoard(columns, rows);

        // Arrange
        const expected = null;

        // Act
        const result = board[0][0];
        // Assert
        expect(result).toEqual(expected);
    });
    test('Return a board with all 1 and nulls in borders test [1][1]', () => {
        const board = createBoard(columns, rows);

        // Arrange
        const expected = 1;

        // Act
        const result = board[1][1];
        // Assert
        expect(result).toEqual(expected);
    });
});
describe('Given copyBoard function', () => {
    const columns = 6;
    const rows = 6;
    test('Return a copied board with all 1 and nulls in borders test [0][0]', () => {
        const board = createBoard(columns, rows);
        const boardCopy = copyBoard(board);
        // Arrange
        const expected = null;

        // Act
        const result = boardCopy[0][0];
        // Assert
        expect(result).toEqual(expected);
    });
    test('Test that are differets objects', () => {
        const board = createBoard(columns, rows);
        const boardCopy = copyBoard(board);

        // Arrange
        const expected = false;

        // Act
        const result = board === boardCopy;
        // Assert
        expect(result).toEqual(expected);
    });
});

describe('Given countNearCells function', () => {
    const columns = 6;
    const rows = 6;
    test('Return sum of all near cells in [0][0]', () => {
        const board = createBoard(columns, rows);

        // Arrange
        const expected = 3;

        // Act
        const result = countNearCells(1, 1, board);
        // Assert
        expect(result).toEqual(expected);
    });
    test('Return sum of all near cells in [2][2]', () => {
        const board = createBoard(columns, rows);

        // Arrange
        const expected = 8;

        // Act
        const result = countNearCells(2, 2, board);
        // Assert
        expect(result).toEqual(expected);
    });
});

describe('Given checkIfCellIsAlive function', () => {
    test('If cell is 0 and sum of near cells are 3', () => {
        const count = 3;
        const currentState = 0;

        // Arrange
        const expected = 1;

        // Act
        const result = checkIfCellIsAlive(currentState, count);
        // Assert
        expect(result).toEqual(expected);
    });
    test('If cell is 0 and sum of near cells are 2', () => {
        const count = 2;
        const currentState = 0;

        // Arrange
        const expected = 0;

        // Act
        const result = checkIfCellIsAlive(currentState, count);
        // Assert
        expect(result).toEqual(expected);
    });
    test('If cell is 1 and sum of near cells are 2', () => {
        const count = 2;
        const currentState = 1;

        // Arrange
        const expected = 1;

        // Act
        const result = checkIfCellIsAlive(currentState, count);
        // Assert
        expect(result).toEqual(expected);
    });
    test('If cell is 1 and sum of near cells are 3', () => {
        const count = 3;
        const currentState = 1;

        // Arrange
        const expected = 1;

        // Act
        const result = checkIfCellIsAlive(currentState, count);
        // Assert
        expect(result).toEqual(expected);
    });
});
