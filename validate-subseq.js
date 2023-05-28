const validate = (sequence, subsequence) => {
  let j = 0
  
  // combine conditions
  for (let i = 0; i < sequence.length; i++) {
    const a = sequence[i]
    const b = subsequence[j]
    
    if (b === undefined) {
      return true
    }
    
    if (a === b) {
      j++ 
    }    
  }
  
  return j === subsequence.length
}
