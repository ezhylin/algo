// two numbers sum
const nums = [-1, 6, 1, 3, 8, -9, 5, 7]; 
const sum = 10;

function twoNumberSum(numbers = nums, targetSum = sum) { 
  for (let i = 0; i < numbers.length; i++) {  
    for (let j = i + 1; j < numbers.length; j++) {
      const first = numbers[i];
      const second = numbers[j];
      const matchSum = first + second;
     
      if (matchSum === targetSum) {
        return [first, second]
      }
    }
  }
 
 return [];
}
