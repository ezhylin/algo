const reverseString = require('./index');

test('a string should be reverted', () => {
    expect(reverseString('string to test')).toBe('tset ot gnirts');
});
