const { revertNumber } = require('./index');

test('should revert number', () => {
    expect(revertNumber(341)).toBe(143);
    expect(revertNumber(-15)).toBe(-51);
    expect(revertNumber(-900)).toBe(-9);
    expect(revertNumber(10)).toBe(1);
});