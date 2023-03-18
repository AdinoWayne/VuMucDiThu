function subarraySum(nums: number[], k: number): number {
    const map = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;
    for (let num of nums) {
        sum = sum + num;
        total += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return total;
};
// index :   0, 1, 2, 3, 4
// nums[]:  [1, 2, 3, 4, 5]
// prefix[]:[1, 3, 6, 10, 15]

// prefix[i] - prefix[j] = k where i > j (i, j any index, in our case they are i = 4, j = 2) prefix[i] - k = prefix[j]
// that from index j + 1 to i, the sum of the elements is k, right na,
// hence it proves that their exist an subarray from index j + 1 to i whose sum is k
    
// Time Complexity --> O(n)
// Space Complexity --> O(n)
