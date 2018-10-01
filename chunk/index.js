module.exports = (arr, size) => {
    return arr.reduce((chunks, curr, i, self) => {
        if (i % size === 0) {
            return [...chunks, self.slice(i, i + size)];
        }

        return chunks;
    }, []);

    return [];
};
