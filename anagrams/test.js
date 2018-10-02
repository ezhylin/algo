const anagrams = require('./index');

test('anagrams is defined', () => {
    expect(anagrams).toBeDefined();
});

test('`Hello` is an anagram of `lloeh`', () => {
    expect(anagrams('hello', 'lleho')).toBeTruthy();
});

test('`Hello world` isn`t an anagram of `Hello men`', () => {
    expect(anagrams('hello world', 'hello men')).toBeFalsy();
});
