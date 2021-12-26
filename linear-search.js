function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
      
  return -1;
}


const me = linearSearch(['me', 'he'], 'me');
const he = linearSearch(['me', 'he'], 'he');
const nothing = linearSearch(['me', 'he'], 'she');
