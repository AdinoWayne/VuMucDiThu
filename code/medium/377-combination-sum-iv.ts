// problem in computer science called the "Coin Change Problem"

function combinationSum4(nums: number[], target: number): number {
    const n = nums.length;
    const memo = new Map();
    
    return topDown(target);
    
    function topDown(target) {
        // base cases
        if (target == 0) return 1;
        if (target < 0) return 0;
        if (memo.has(target)) return memo.get(target);
         
        let count = 0;
        
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            if (num <= target) {
                const amountLeft = target - num;
                count += topDown(amountLeft);
            }
        }
        
        memo.set(target, count);
        return count;
    }
};

// The time complexity of the given function is O(n * target) in the worst case scenario,
// where n is the number of elements in the nums array and target is the target sum.

// The function uses memoization and a top-down approach to avoid redundant computations.
// The topDown function is called recursively, with the target sum being reduced by one of the elements in the nums array in each call.
// In the worst case scenario, where the target sum is reached by adding the smallest elements in the nums array one by one,
// the function will make target calls to topDown, resulting in a time complexity of O(target).
// Additionally, in each call to topDown, the function loops over n elements in the nums array, giving us a total time complexity of O(n * target).

// The space complexity of the function is O(target) in the worst case scenario,
// as the function stores the number of combinations that add up to each target sum in a memoization map.
// The size of the memoization map is proportional to the target sum, so as the target sum increases,
// the space complexity of the function increases linearly.
