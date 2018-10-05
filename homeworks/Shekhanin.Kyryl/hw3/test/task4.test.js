const { encode, decode } = require('../Task4');

describe('Test encode and decode methods', () => {
    it('Input to encode аб expext array [1,2]', () => {
        const input = 'аб';
        const expectedResult = [1, 2];

        const actualResult = encode(input);

        expect(actualResult).toEqual(expectedResult);
    });


    it('Input to encode abab input key "ab ab ab" expext array [1, 2, 4, 5]', () => {
        const input = 'abab';
        const expectedResult = [1, 2, 4, 5];

        const actualResult = encode(input, 'ab ab ab');

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array to decode [1, 2, 3] expext string абв', () => {
        const input = [1, 2, 3];
        const expectedResult = 'абв';

        const actualResult = decode(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input array to decode [1, 2, 3, 4] and key string "abababa ab" expext string абв', () => {
        const input = [1, 2, 3, 4];
        const expectedResult = 'abab';

        const actualResult = decode(input, 'abababa ab');

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input decode array [1,2,3,4,5,6,7,8,9] expext абвгдеёжз', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const expectedResult = 'абвгдеёжзий';

        const actualResult = decode(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it('Input АбВгдеёЖЗ expext array [1,2,3,4,5,6,7,8,9]', () => {
        const input = 'АбВгдеёЖЗ';
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const actualResult = encode(input);

        expect(actualResult).toEqual(expectedResult);
    });
});
