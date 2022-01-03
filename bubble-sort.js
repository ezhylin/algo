function bubbleSort(array) {  
  for (let i = array.length - 1; i >= 0; i--) {
    let swapped = false;
    
    for (let j = 1; j <= i; j++) {
      const c = array[j];
      const p = array[j - 1];
      
      if (p > c) {        
        [array[j -1 ], array[j]] = [array[j], array[j - 1]];
        
        swapped = true;
      }
    }
    
    if (!swapped) {
      return array;
    }
  }
  
  return array;
}


const asc = bubbleSort([1, 2, 4, -2]);
