const comp = require('../task2');
const { assert } = require('chai');

describe('Test suite for Lowest Common Multiple', () => {
    it('Input 6 and 8 expext 24', () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        assert.isTrue(comp(a1, a2));
    });
});
