import { renderBoard } from './domFunctions.js';

describe('Given renderBoard function', () => {
    const columns = 6;
    const rows = 6;
    test('Return a error because testing in the wrong enviroment', () => {
        const expected = 'document is not defined';

        expect(() => {
            renderBoard(columns, rows);
        }).toThrow(expected);
    });
});
