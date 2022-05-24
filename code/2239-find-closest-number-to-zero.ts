function findClosestNumber(nums: number[]): number {
    let ans = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let num of nums) {
        if (Math.abs(num) < min) {
            min = Math.abs(num);
            ans = num;
        } else if (Math.abs(num) == min && num > ans) {
            ans = num;
        }
    }
    return ans;
};
