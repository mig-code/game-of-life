import { createBoard } from './functions.js';

describe('Given createBoard function', () => {
    test('Return a board with all 1', () => {
        const board = createBoard(6, 6);

        // Arrange
        const expected = 1;

        // Act
        const result = board[0][0];
        // Assert
        expect(result).toEqual(expected);
    });
});
