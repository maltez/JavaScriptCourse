const lowestMultiple = require('../task2');

describe('Test suite for Lowest Common Multiple', () => {
    it('Input 6 and 8 expext 24', () => {
        const input1 = 6;
        const input2 = 8;
        const expectedResult = 24;

        const actualResult = lowestMultiple(input1, input2);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input 18 and 8 expext 45', () => {
        const input1 = 18;
        const input2 = 45;
        const expectedResult = 90;

        const actualResult = lowestMultiple(input1, input2);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input 396 and 180 expext 1980', () => {
        const input1 = 296;
        const input2 = 180;
        const expectedResult = 1980;

        const actualResult = lowestMultiple(input1, input2);

        expect(actualResult).toEqual(expectedResult);
    });
});
