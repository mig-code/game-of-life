import {
    createBoard,
    countNearCells,
    addBorderCells,
    copyBoard,
    checkIfCellIsAlive,
    getNextBoard,
    getBoardtoRender,
} from './functions.js';

describe('Given createBoard function', () => {
    const columns = 6;
    const rows = 6;
    test('Return a board with random 0 or 1 in cells and nulls in borders test [0][0]', () => {
        const board = createBoard(columns, rows);

        // Arrange
        const expected = null;

        // Act
        const result = board[0][0];
        // Assert
        expect(result).toEqual(expected);
    });
    test('Return a board with random 0 or 1 in cells and nulls in borders test [1][1]', () => {
        const board = createBoard(columns, rows);

        // Arrange

        // Act
        const result = board[1][1];
        // Assert
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(1);
    });
    test('Render board with null in borders', () => {});
    test('Length should be 6 +2', () => {
        const board = createBoard(columns, rows);
        const expected = 8;
        const result = board.length;
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

describe('Given addBoardCells function', () => {
    const board = [
        [null, null, null, null, null, null],
        [null, 3, 0, 2, 5, null],
        [null, 0, 0, 0, 0, null],
        [null, 1, 1, 0, 1, null],
        [null, 0, 0, 0, 0, null],
        [null, null, null, null, null, null],
    ];

    test('Return a board with border modifeds', () => {
        // Arrange
        const expected = [
            [0, 0, 0, 0, 0, 0],
            [5, 3, 0, 2, 5, 3],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [5, 3, 0, 2, 5, 3],
        ];

        // Act
        addBorderCells(board);
        // Assert
        expect(board).toEqual(expected);
    });
});
describe('Given countNearCells function', () => {
    const testBoard = [
        [null, null, null, null, null],
        [null, 1, 1, 1, null],
        [null, 1, 1, 1, null],
        [null, 1, 1, 1, null],
        [null, null, null, null, null],
    ];

    test('Return sum of all near cells in [0][0]', () => {
        // Arrange
        const expected = 3;

        // Act
        const result = countNearCells(testBoard, 1, 1);
        // Assert
        expect(result).toEqual(expected);
    });
    test('Return sum of all near cells in [2][2]', () => {
        // Arrange
        const expected = 8;

        // Act
        const result = countNearCells(testBoard, 2, 2);
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

describe('Given getNextBoard function', () => {
    const testBoard = [
        [null, null, null, null, null],
        [null, 1, 1, 1, null],
        [null, 1, 1, 1, null],
        [null, 1, 1, 1, null],
        [null, null, null, null, null],
    ];
    test('In copy board [1][1] counterCells should be 1', () => {
        const board = getNextBoard(testBoard);
        // Arrange
        const expected = board[1][1];

        // Act
        const result = checkIfCellIsAlive(
            testBoard[1][1],
            countNearCells(testBoard, 1, 1)
        );
        // Assert
        expect(result).toEqual(expected);
    });
    test('In copy board [1][2] counterCells should be 0', () => {
        const board = getNextBoard(testBoard);
        // Arrange
        const expected = board[1][2];

        // Act
        const result = checkIfCellIsAlive(
            testBoard[1][2],
            countNearCells(testBoard, 1, 2)
        );
        // Assert
        expect(result).toEqual(expected);
    });
});

describe('Given getBoardToRender function ', () => {
    const columns = 6;
    const rows = 6;
    const board = createBoard(columns, rows);
    const nextBoard = getBoardtoRender(board);
    test('Return a board with random 0 or 1 in cells and nulls in borders test [1][1]', () => {
        // Act
        const result = nextBoard[0][0];
        // Assert
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(1);
    });

    test('Render board without null in borders', () => {});
    test('Length should be 6', () => {
        const expected = 6;
        const result = nextBoard.length;
        expect(result).toEqual(expected);
    });
});
