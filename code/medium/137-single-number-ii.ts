/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    nums.sort((x, y) => x - y);

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
}
