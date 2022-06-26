function decompressRLElist(nums: number[]): number[] {
    let dcomList = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        while (freq !== 0) {
            dcomList.push(val);
            freq--;
        }
    }
    return dcomList;
};



<!-- another way -->

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    return nums.reduce((acc, v, i) => i % 2 == 0 ? acc.concat(_.times(v, _.constant(nums[i + 1]))) : acc, []);
};
