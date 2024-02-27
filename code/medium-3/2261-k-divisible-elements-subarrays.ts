function countDistinct(nums: number[], k: number, p: number): number {
    let n = nums.length, se = new Set();
    const ok = (a, k, p) => {
        let cnt = 0;
        for (const x of a) {
            if (x % p == 0) cnt++;
        }
        return cnt <= k;
    };
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = nums.slice(i, j + 1);
            if (ok(sub, k, p)) se.add(JSON.stringify(sub)); // transfer array to string to remove duplicates
        }
    }
    return se.size;
};
// TC O(n^3 * log n)
// SC O(n^2 * k), where n is the length of nums, k is the maximum subarray size, and p is the divisor
