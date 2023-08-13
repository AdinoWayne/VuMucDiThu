function kConcatenationMaxSum(arr: number[], k: number): number {
    const MOD = 1e9 + 7;
    const n = arr.length;
    
    let max = arr[0]; // represent the max subarray sum of a single iteration of the original array
    let curr = arr[0];
    
    // Kadane's Algorithm
    for (let i = 1; i < n; i++) {
        curr = Math.max(arr[i], curr + arr[i]);
        max = Math.max(curr, max);
    }
    
    // If we can't get a subarray with a sum that is greater than 0, then it is better to not get anything
    if (max < 0) max = 0;
    
    let prefixSum = arr[n - 1];
    let maxPrefix = arr[n - 1];
    
    // the prefix is from the back since we are going to use the back portion of the original array for the front of the subarray
    for (let i = n - 2; i >= 0; i--) {
        prefixSum += arr[i];
        maxPrefix = Math.max(prefixSum, maxPrefix);
    }
    
    let suffixSum = arr[0];
    let maxSuffix = arr[0];
    
    // the suffix is the reverse of prefix where we are going to use the front portion of the original array for the back of the subarray
    for (let i = 1; i < n; i++) {
        suffixSum += arr[i];
        maxSuffix = Math.max(suffixSum, maxSuffix);
    }

    let sum = 0;
    
    // calculate the entire sum of the array
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    // For k == 1, we just need to return the result from Kadane's Algorithm
    if (k == 1) return max % MOD;
    
    
    // The different scenarios of the max subarray sum that can form are:
	//
    //  (1) max (max subarray sum from Kadane's Algorithm or 0 if the max sum < 0)
	//
	//  (2) maxPrefix + the sum of the original array * (k - 2) + maxSuffix. It is k - 2 since
    //      we used an array for the maxPrefix and array for the maxSuffix.
	//
    //  (3) maxPrefix + maxSuffix (this represent the max subarray from 2 concatenation of the original array)
    
	
    // If we have a sum greater than 0, then the maximum is between (1), (2), and (3) from the three scenarioes above
    if (sum > 0) {
        return Math.max(
            max, // (1)
			maxPrefix + (k - 2) * sum + maxSuffix, // (2)
			maxPrefix + maxSuffix // (3)
		) % MOD;
	}
   
    // If the sum is less than 0, then the maximum is between (1) and (3) from the three scenarioes above
    return Math.max(
        max, // (1)
        maxPrefix + maxSuffix // (3)
    ) % MOD;
};
// TC O(n)
// SC O(1)
