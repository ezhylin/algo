const capitalize = require('./index');

test('capitalize is defined', () => {    
    expect(typeof capitalize).toEqual('function');
});

test('all words in a srting capitalized ', () => {
    expect(capitalize('HelLo World! I`m a new front-End developer:)!')).toEqual('Hello World! I`m A New Front-end Developer:)!')
});