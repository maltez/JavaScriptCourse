const advancedFilter = require('../task3');

describe('Test suite advancedFilter method', () => {
    it('Input [3,4,5,6,7] expect [3,5,6,7]', () => {
        const input = [3, 4, 5, 6, 7];
        const expectedResult = [3, 5, 6, 7];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input [4,4,2,6,8] expect []', () => {
        const input = [4, 4, 2, 6, 8];
        const expectedResult = [6];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input [-14,49,21,63,8] expect [-14, 49, 21, 63]', () => {
        const input = [-14, 49, 21, 63, 8];
        const expectedResult = [-14, 49, 21, 63];

        const actualResult = advancedFilter(input);

        expect(actualResult).toEqual(expectedResult);
    });
});
