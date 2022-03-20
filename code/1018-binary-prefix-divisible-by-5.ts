function prefixesDivBy5(nums: number[]): boolean[] {
         let res = [];
         let prefix = 0;
         const len = nums.length;
         for (let i = 0; i < len; i++) {
             prefix = ((prefix << 1) + nums[i]) % 5;
             res.push(prefix == 0);
         }
         return res;
};
