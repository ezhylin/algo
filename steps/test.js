const steps = require('./index');

jest.spyOn(console, 'log');

afterEach(() => {
    console.log.mockRestore();
});

test('`steps` is defined', () => {
    expect(steps).toBeDefined();
});

test('`steps` is invokes console log appropriate amount of times', () => {
    steps(4);
    expect(console.log.mock.calls.length).toEqual(4);
});

test('`steps` logs correct value for each iteration', () => {
    expect(console.log.mock.calls[0][0]).toEqual('#   ');
    expect(console.log.mock.calls[1][0]).toEqual('##  ');
    expect(console.log.mock.calls[2][0]).toEqual('### ');
    expect(console.log.mock.calls[3][0]).toEqual('####');
});