const chunk = require('./index');

test('Chunk is defined', () => {
    expect(chunk).toBeDefined();
});

test('array is splited on chunks by 2 elements', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1], 2)).toEqual([[1]]);
});

test('array is splited on chunks by 3 elements', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
});