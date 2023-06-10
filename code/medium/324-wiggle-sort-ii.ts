/**
Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
You may assume the input array always has a valid answer.

Input: nums = [1,5,1,1,6,4]
Output: [1,6,1,5,1,4]
Explanation: [1,4,1,5,1,6] is also accepted.

 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    nums.sort((a , b) => a - b);
    const tmp = [...nums];
    let low = Math.floor((nums.length - 1)/2);
    let high = nums.length -1;
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            nums[i] = tmp[low];
            low--;
        } else {
            nums[i] = tmp[high];
            high--;
        }
    }
};

// Time complexity: O(nLogN)
// Space complxity: O(n)
