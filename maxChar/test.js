const maxChar = require('./index');

test('should return most commonly used character', () => {
    expect(maxChar('Hello, world')).toBe('l');
    expect(maxChar('Hello, world1111111111')).toBe('1');
});