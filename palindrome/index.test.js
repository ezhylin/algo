const palindrome = require('./index');

test('Palindrome is a function', () => {
    expect(typeof palindrome).toEqual('function');
});

test('Palindrome. Output string is similar to input.', () => {
    expect(palindrome('ollo')).toBeTruthy();
    expect(palindrome('olla')).toBeTruthy();
});