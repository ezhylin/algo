const reverse = require('./index');

test('Reverse is a function.', () => {
    expect(typeof reverse).toEqual('function');
});

test('A string with spaces and cappital letters is reversed.', () => {
    expect(reverse('hE ll O')).toEqual('O ll Eh');
});