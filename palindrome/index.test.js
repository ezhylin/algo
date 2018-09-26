const palindrome = require('./index');

test('Palindrome is a function', () => {
    expect(typeof palindrome).toEqual('function');
});

test('Palindrome. Output string is similar to input.', () => {
    expect(palindrome('ollo')).toBe(true);
    expect(palindrome('olla')).toBe(false);
});