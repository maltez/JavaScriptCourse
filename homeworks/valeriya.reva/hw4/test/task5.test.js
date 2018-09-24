const moveZeros = require('../task5');

describe('Test suite move zeros', () => {
    it('Input [1,2,0,1,0,1,0,3,0,1] expext array [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]', () => {
        const input = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
        const expectedResult = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];

        const actualResult = moveZeros(input);

        expect(actualResult).toEqual(expectedResult);
    });


    it('Input [{},"zzjz",0,1,0,true,0,[],0,1] expext array [ {},"2",1,true,[],1,0,0,0,0]', () => {
        const input = [{}, 'zzjz', 0, 1, 0, true, 0, [], 0, 1];
        const expectedResult = [{}, 'zzjz', 1, true, [], 1, 0, 0, 0, 0];

        const actualResult = moveZeros(input);

        expect(actualResult).toEqual(expectedResult);
    });
});
