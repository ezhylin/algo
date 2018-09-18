const add = require('./index');

test('adds two numbers', () => {
    expect(typeof add).toEqual('function');
    expect(add(1, 1)).toEqual(2);
});