function findLonely(nums: number[]): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    let result = [];
    for (let item of map) {
        if (item[1] === 1) {
            if (!map.has(item[0] - 1) && !map.has(item[0] + 1)) {
                result.push(item[0]);
            }
        }
    }
    return result;
};
