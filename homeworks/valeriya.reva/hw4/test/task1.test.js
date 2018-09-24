const commonDevisor = require('../task1');

describe('Test suite Common Devisor', () => {
    it('Input 792 and 1188 expext 396', () => {
        const input1 = 792;
        const input2 = 1188;
        const expectedResult = 396;

        const actualResult = commonDevisor(input1, input2);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input 924 and 396 expext 132', () => {
        const input1 = 924;
        const input2 = 396;
        const expectedResult = 132;

        const actualResult = commonDevisor(input1, input2);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input 35 and 18 expext 1', () => {
        const input1 = 35;
        const input2 = 18;
        const expectedResult = 1;

        const actualResult = commonDevisor(input1, input2);

        expect(actualResult).toEqual(expectedResult);
    });
});
