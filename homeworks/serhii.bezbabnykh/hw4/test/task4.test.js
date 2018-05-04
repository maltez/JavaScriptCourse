const maxMin = require('../task4');

describe('Test max min method', () => {
    it('Input [1,2, 4,5,6,7,8,-2,12,0,2,12] expect 12', () => {
        const input = [1, 2, 4, 5, 6, 7, 8, -2, 12, 0, 2, 12];
        const expectedResult = 12;

        const actualResult = maxMin(input);

        expect(actualResult).toEqual(expectedResult);
    });


    it('Input [1,2, 4,5,6,7,8,-2,12,0,2,12] expect -2', () => {
        const input = [1, 2, 4, 5, 6, 7, 8, -2, 12, 0, 2, 12];
        const expectedResult = -2;

        const actualResult = maxMin(input, false);

        expect(actualResult).toEqual(expectedResult);
    });
});
