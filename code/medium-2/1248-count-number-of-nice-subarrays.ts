function numberOfSubarrays(nums: number[], k: number): number {
    let count = 0;
    let odd = 0;
    let l = 0, r = -1;
    while(r < nums.length-1) {
        r++;
        if (nums[r]%2 !== 0) odd++;
        if (odd === k) {
            let right = 1;
            let left = 1;
            // move r if next element is even
            while(r < nums.length-1 && nums[r+1]%2 === 0) {
                r++;
                right++;
            }
            // move l if current element for l is even
            while(l < r && nums[l]%2 === 0) {
                l++;
                left++;
            }
            count += left*right;
            l++;
            odd--;
        }
    }
    return count;
};
// TC O(n)
// SC O(1)
