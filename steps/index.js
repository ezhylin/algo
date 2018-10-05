module.exports = number => {
    for (let row = 1; row <= number; row++) {
        let step = '';

        for (let col = 1; col <= number; col++) {
            steps = col <= row ? step += '#' : step += ' '; 
        }

        console.log(step);
    }
}