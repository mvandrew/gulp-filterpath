const assert = require('assert');
const { describe, it } = require('mocha');
const fp = require('../index');

describe('Windows: Filter Path', () => {
    it('Should return -1 when the target path is not equal.', () => {
        const actual = fp('.\\projects\\target', '.\\projects\\target\\assets');
        const expected = './assets';
        assert.strictEqual(actual, expected);
    })
});

describe('Linux: Filter Path', () => {
    it('Should return -1 when the target path is not equal.', () => {
        const actual = fp('/home/user/projects/target', '/home/user/projects/target/assets');
        const expected = './assets';
        assert.strictEqual(actual, expected);
    })
});
