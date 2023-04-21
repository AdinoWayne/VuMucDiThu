function monotoneIncreasingDigits(N: number): number {
  // create any array of integers from number N
  const n = Array.from(''+N, Number);
  
  let i = 0;
  
  // find the cliff
  while(i < n.length-1 && n[i] <= n[i+1])
    i++;

 // decremnet the cliff and any values before the cliff which satisfy this condition n[i] > n[i+1]
  while( i >= 0 && n[i] > n[i+1]){
    n[i]--;
    i--;
  }
  
  // assign any value after the first cliff to 9
  for(let j = i+2; j < n.length; j++)
    n[j] = 9;
  
  // convert the integer array to a string then to a number and return
  return +n.join('')
};

// Time complexity: O(n)
// Space complexity: O(1)
