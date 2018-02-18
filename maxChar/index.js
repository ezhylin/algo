'use strict';
/**
 * 
 * @param {string} str - a string.
 * @returns {string} Character that is used most commonly in the string.
 */
const maxChar = (str) => {
    const charMap = str.split('').reduce((map, char) => {
        map[char] = map[char] + 1 || 1;
        return map;
    }, {});

    let max = 0;
    let maxChar;

    for (let key in charMap) {
        if (max < charMap[key]) {
            max = charMap[key];
            maxChar = key;
        }
    }

    return maxChar;
};

module.exports = maxChar;