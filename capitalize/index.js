module.exports = (str) => {
    return str.split(' ').reduce((capitalized, word) => {
        return capitalized + ' ' + word[0].toUpperCase() + word.slice(1).toLowerCase();
    }, '').trim();
}