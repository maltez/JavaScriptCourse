const isPolindrome = require('../Task3');

describe('Test suite for polyndrome', () => {
    it('Input zaaz expext true', () => {
        const input = 'zaaz';

        const actualResult = isPolindrome(input);

        expect(actualResult).toBeTruthy();
    });

    it('Input zaza expext false', () => {
        const input = 'zaza';

        const actualResult = isPolindrome(input);

        expect(actualResult).toBeFalsy();
    });

    it('Input array А Роза упалА на лапу азора expext array [1,2,3,4,5,6,7,8,9,0]', () => {
        const input = 'А Роза упалА на лапу азора';

        const actualResult = isPolindrome(input);

        expect(actualResult).toBeTruthy();
    });

    it('Input empty string expext true', () => {
        const input = '';

        const actualResult = isPolindrome(input);

        expect(actualResult).toBeTruthy();
    });
});
