module.exports = num => {
    const reverted = num.toString().split('').reverse().join('');

    return parseInt(reverted)  * Math.sign(num);
};