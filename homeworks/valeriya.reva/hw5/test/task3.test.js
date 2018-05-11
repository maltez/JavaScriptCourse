const createPhoneNumber = require('../task3');
const { assert } = require('chai');

describe('Test suite advancedFilter method', () => {
    it('Input 1, 2, 3, 4, 5, 6, 7, 8, 9, 0] expect (123) 456-7890', () => {
        assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});
