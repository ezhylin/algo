const fizzBuzz = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('fizzBuzz is defined', () => {
    expect(fizzBuzz).toBeDefined();
});

test('fizzBuzz calls count is the same as argument', () => {
  fizzBuzz(16);

  expect(console.log.mock.calls.length).toEqual(16);
});

test('`fizz buzz` message is printed when the number divides by 3 and 5', () => {
  fizzBuzz(16);
  expect(console.log.mock.calls[0][0]).toEqual('fizz buzz');
  expect(console.log.mock.calls[15][0]).toEqual('fizz buzz');
});

test('`fizz` message is printed when the number divides by 3', () => {
  fizzBuzz(16);

  expect(console.log.mock.calls[3][0]).toEqual('fizz');
  expect(console.log.mock.calls[9][0]).toEqual('fizz');
});

test('`buzz` message is printed when the number divides by 5', () => {
  fizzBuzz(16);

  expect(console.log.mock.calls[5][0]).toEqual('buzz');
  expect(console.log.mock.calls[10][0]).toEqual('buzz');
});

test('`index`is printed in the message when the number is not divided by 3, 5 or 3 and 5', () => {
  fizzBuzz(5);

  expect(console.log.mock.calls[1][0]).toEqual(1);
  expect(console.log.mock.calls[2][0]).toEqual(2);
  expect(console.log.mock.calls[4][0]).toEqual(4);
});