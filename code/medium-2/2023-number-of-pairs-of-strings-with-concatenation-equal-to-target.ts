function numOfPairs(nums: string[], target: string): number {
    var count = 0;
    var x = 0;
    while (x < nums.length) {
        for (let y = 0; y<nums.length; y++) {
            if (nums[x] + nums[y] == target) {
                count += 1;
                if (x == y) {
                    count -= 1;
                }
            }
        }
        x++;
    }
    return count;
};
// TC O(n^2)
// SC O(1)

function numOfPairs(nums: string[], target: string): number {
        const freq = new Map();
    for (const num of nums) {
        if (num.length < target.length) {
        freq.set(num, (freq.get(num) || 0) + 1);
        }
    }
    let res = 0;
    for (const [s, frq] of freq.entries()) {
        if (target.startsWith(s)) {
        if (s + s === target) {
            res += frq * (frq - 1);
        } else {
            const other = target.slice(s.length);
            res += frq * (freq.get(other) || 0);
        }
        }
    }

    return res;
};
// TC O(2n)
// SC O(n2)
