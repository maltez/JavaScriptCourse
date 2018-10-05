const { assert } = require('chai');
const negativeFilter = require('../Task1');

describe('Test suite for Filter negative numbers from array', () => {
    it('Input array [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,0] expext array [1,2,3,4,5,6,7,8,9,0]', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, 0];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        const actualResult = negativeFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array [-1, -2, -3] expext array []', () => {
        const input = [-1, -2, -3];
        const expectedResult = [];

        const actualResult = negativeFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array [1,2,3,4,5,6,7,8,9,0] expext array [1,2,3,4,5,6,7,8,9,0]', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        const actualResult = negativeFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input string expext thows an error', () => {
        const input = 'string';

        assert.throws(() => negativeFilter(input));
    });
});
