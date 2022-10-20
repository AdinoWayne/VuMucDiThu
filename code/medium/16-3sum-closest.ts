function threeSumClosest(nums: number[], target: number): number {
  nums.sort((x, y) => x - y);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
	  
	  //If found, return target.
      if (total === target) return target;
      closest = Math.abs(target - closest) < Math.abs(target - total) ? closest : total;
	  
      if (total < target) {
        left++;
        while(left < right && nums[i] === nums[i - 1]) left++;
      } else {
        right--;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return closest;
};
