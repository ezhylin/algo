const sum = require('./index.js').sum;

test('1 plus 3 should be equal 4', () => {
    expect(sum(1, 3)).toBe(4);
});
