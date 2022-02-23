function thirdMax(nums: number[]): number {
    const numsSet = new Set(nums);
    nums = [...numsSet];
    nums.sort((a, b) => b - a);
    if(nums.length > 2) {
        return nums[2];
    }
    return nums[0];
};

<!-- old -->

function thirdMax(nums: number[]): number {
    let [a, b, c] = [null, null, null];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] == a || nums[i] == b || nums[i] == c) {
//             
        } else if (nums[i] > a || a == null) {
            c = b;
            b = a;
            a = nums[i];
        } else if (nums[i] > b || b == null) {
            c = b;
            b = nums[i];
       } else if (nums[i] > c || c == null) {
            c = nums[i];
      }
    }
    return c !== null ? c : a;
};
