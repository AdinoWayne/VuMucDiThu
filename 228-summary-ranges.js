/**
 * github: theketan2
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = (nums) => {
  if (nums.length === 1) {
    return [nums[0].toString()];
  }
  nums.push(null);
  let sol = [];
  let temp = [];
  for (let elem of nums) {
    if (!temp.length) {
      temp.push(elem);
    } else if (elem - temp[temp.length - 1] === 1) {
      temp.push(elem);
    } else {
      sol.push(
        temp.length === 1
          ? temp[0].toString()
          : `${temp[0]}->${temp[temp.length - 1]}`
      );
      temp = [elem];
    }
  }
  return sol;
};
