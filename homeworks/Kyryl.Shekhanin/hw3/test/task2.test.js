const { assert } = require('chai');
const advancedFilter = require('../Task2');

describe('Test suite for advanced Filter array numbers', () => {
    it('Input array [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,0] expext array [1,2,3,4,5,6,7,8,9]', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, 0];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array [-1, -2, -3] expext array []', () => {
        const input = [-1, -2, -3];
        const expectedResult = [];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array [1,2,3,4,5,6,7,8,9,0] expext array [1,2,3,4,5,6,7,8,9,0]', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array [1,2,3,4,5,6,7,8,9,0,-1,12,45,-6] expext array [1,2,3,4,5,6,7,8,9,0]', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, 12, 45, -6];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input string expext thows an error', () => {
        const input = 'string';

        assert.throws(() => advancedFilter(input));
    });
});
