const revertNumber = require('./');

test('revertNumber is defined', () => {
    expect(revertNumber).toBeDefined();
})

test('numbe without `0` is reverted correct', () => {
    expect(revertNumber(4)).toEqual(4);
    expect(revertNumber(41)).toEqual(14);
    expect(revertNumber(-92)).toEqual(-29);
    expect(revertNumber(-900)).toEqual(-9);
    expect(revertNumber(0)).toEqual(0);
    expect(revertNumber(-0)).toEqual(-0);
});