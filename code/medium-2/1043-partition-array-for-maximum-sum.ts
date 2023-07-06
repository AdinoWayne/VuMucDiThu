function maxSumAfterPartitioning(arr: number[], k: number): number {
    let result = 0;

    if (arr && (arr.length >= 1) && (arr.length <= 500) && (k >= 1) && (k <= arr.length)) {
        let currMaxForPartition;
        let memo = [];
        // the only partition size to use for the first number can only be 1, so the max sum is that number
        memo[0] = arr[0]; 

        // for every number in the array fill the memo[]
        for (let i = 1; i < arr.length; i++) {
            // init the max num for the partition as the lowest possible number that could be in arr[]
            currMaxForPartition = 0;
            // init memo[] as a placeholder value as minimal sum possible
            memo[i] = 0;

            // for each partition size from 1 until k, keeping in mind that 
            // the partition size can't be bigger than the current index
            for (let a = 1; (a <= k) && ((i - a + 1) >= 0); a++) {
                // find the biggest number in that partition in arr[]
                currMaxForPartition = Math.max(currMaxForPartition, arr[i - a + 1]);

                // multiply the currMaxForPartition by partition size and add that the max sum before that
                // partition. if it's bigger than the last max sum, override it.
                // if i is smaller than the partition size, use 0 as previous max sum
                memo[i] = Math.max(memo[i], ((i >= k) ? memo[i - a] : 0) + (a * currMaxForPartition));
            }
        }

        // last value in memo
        result = memo[arr.length - 1];
    }

    return result;
};
