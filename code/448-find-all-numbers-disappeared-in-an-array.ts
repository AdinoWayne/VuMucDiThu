function findDisappearedNumbers(nums: number[]): number[] {
    var res = [];
    const arr = Array.from({length: nums.length}, (_, i) => i + 1);
    const n = arr.length;
    for(var i=0;i<n;i++){
        if(!nums.includes(arr[i])) {
            res.push(i + 1)
        }
    }
    return res
};
<!-- Runtime: 6648 ms, faster than 7.08% of TypeScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 52.7 MB, less than 48.31% of TypeScript online submissions for Find All Numbers Disappeared in an Array. -->

function findDisappearedNumbers(nums: number[]): number[] {
    var res = [];
    for(var i=1;i<nums.length+1;i++){
        if(nums.indexOf(i)===-1)res.push(i)
    }
    return res
};
                                      
<!-- Runtime: 6620 ms, faster than 7.38% of TypeScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 51.1 MB, less than 63.38% of TypeScript online submissions for Find All Numbers Disappeared in an Array. -->

function findDisappearedNumbers(nums: number[]): number[] {
    let mis = [];
    for (let i = 0; i < nums.length; i++)
      {
        let temp = Math.abs(nums[i]) - 1;
        nums[temp] = nums[temp] > 0 ? -nums[temp] : nums[temp];
      }
        for (let i = 0; i < nums.length; i++)
          {
          if (nums[i] > 0){
            mis.push(i + 1);
          }
      }
    return mis;
};

<!-- Runtime: 133 ms, faster than 80.92% of TypeScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 50.5 MB, less than 72.31% of TypeScript online submissions for Find All Numbers Disappeared in an Array. -->
