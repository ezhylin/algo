const fibonacci = require('./index');

test('`fibonacci` is defined and it is a function', () => {
    expect(fibonacci).toBeDefined();
    expect(typeof fibonacci).toEqual('function');
});

test('`fibonacci` returns 3 whet it receives 4 as argument', () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(77)).toEqual(5527939700884757);
});