module.exports = (strA, strB) => {
    const countedChars = [...strA].reduce((set, char) => {
        set[char] = set[char] + 1 || 1;
        
        return set;
    }, {});

    for (const char of strB) {
        const charAmount = countedChars[char] - 1;

        if (isNaN(charAmount) || charAmount < 0) {
            return false;
        }
    }

    return true;
};