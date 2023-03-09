function divideArray(arr) {
    const n = arr.length;
    const totalSum = arr.reduce((acc, cur) => acc + cur);
    
    // initialize the dp array with False values
    const dp = new Array(n + 1).fill(false).map(() => new Array(totalSum + 1).fill(false));
    
    // for zero sum, always possible
    for (let i = 0; i <= n; i++) {
      dp[i][0] = true;
    }
    
    // for empty set, no sum possible
    for (let j = 1; j <= totalSum; j++) {
      dp[0][j] = false;
    }
    
    // fill up the rest of the dp array
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= totalSum; j++) {
        dp[i][j] = dp[i - 1][j];
              
        if (arr[i - 1] <= j) {
          dp[i][j] |= dp[i - 1][j - arr[i - 1]];
        }
      }
    }
    
    // find the largest index with True value in dp[n]
    let idx = Math.floor(totalSum / 2);
    while (!dp[n][idx]) {
      idx--;
    }
    
    // construct the two subarrays
    const subset1 = [];
    const subset2 = [];
    let i = n;
    let j = idx;
    while (i > 0 && j >= 0) {
      if (dp[i - 1][j]) {
        i--;
      } else {
        subset1.push(arr[i - 1]);
        j -= arr[i - 1];
        i--;
      }
    }
    
    for (let k = 0; k < n; k++) {
      if (!subset1.includes(arr[k])) {
        subset2.push(arr[k]);
      }
    }
    
    return [subset1, subset2];
}
const list = [9,7,6,5,2,1];

console.log(divideArray(list));

// Top down approach
function divideArrayTD(arr) {
  const n = arr.length;
  const totalSum = arr.reduce((acc, cur) => acc + cur);
  
  // initialize the dp array with False values
  const dp = new Array(n + 1).fill(false).map(() => new Array(totalSum + 1).fill(false));
  
  // for zero sum, always possible
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }
  
  // for empty set, no sum possible
  for (let j = 1; j <= totalSum; j++) {
    dp[0][j] = false;
  }
  
  // fill up the rest of the dp array
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= totalSum; j++) {
      dp[i][j] = dp[i - 1][j];
            
      if (arr[i - 1] <= j) {
        dp[i][j] |= dp[i - 1][j - arr[i - 1]];
      }
    }
  }
  
  // find the largest index with True value in dp[n]
  let idx = Math.floor(totalSum / 2);
  while (!dp[n][idx]) {
    idx--;
  }
  
  // construct the two subarrays
  const subset1 = [];
  const subset2 = [];
  let i = n;
  let j = idx;
  while (i > 0 && j >= 0) {
    if (dp[i - 1][j]) {
      i--;
    } else {
      subset1.push(arr[i - 1]);
      j -= arr[i - 1];
      i--;
    }
  }
  
  for (let k = 0; k < n; k++) {
    if (!subset1.includes(arr[k])) {
      subset2.push(arr[k]);
    }
  }
  
  return [subset1, subset2];
}
