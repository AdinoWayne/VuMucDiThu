function subsetsWithDup(nums: number[]): number[][] {
    'use strict';
    nums.sort();
    var res = [[]],
      count,
      subRes,
      preLength;

    for (let i = 0; i < nums.length; i++) {
        count = 1;

        while (nums[i + 1] && nums[i + 1] == nums[i]) {
            count += 1;
            i++;
        }

        preLength = res.length;
        for (let j = 0; j < preLength; j++) {
            subRes = res[j].slice();
            for (let x = 1; x <= count; x++) {
                if (x > 0) subRes.push(nums[i]);
                res.push(subRes.slice());
            }
        }
    }
    return res;
};
