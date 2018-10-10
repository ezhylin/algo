module.exports = (n) => {
    if (n === 0 || n === 1) {
        return n;
    }

    let nums = [0, 1];

    for (let i = 2; i <= n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2];

        if (n === i) {
            return nums[n];
        }        
    }

    return nums[n];
};