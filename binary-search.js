function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (target !== arr[middle]) {
    if (start === end) {
      return -1;
    }
    
    if (arr[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return middle;
}
