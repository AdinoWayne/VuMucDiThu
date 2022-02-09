// tim index 2 element co sum equal target
var twoSum = function(nums, target) {
    numsIndexes = {};
  
    for (let i = 0; i < nums.length; i += 1) {
      let currentDifference = target - nums[i];
  
      if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
        return [i, numsIndexes[currentDifference]];
      } else {
        numsIndexes[nums[i]] = i;
      }
    }
};
